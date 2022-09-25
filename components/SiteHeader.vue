<template>
  <header
    id="site-header"
    class="w-auto py-6 sticky top-0 backdrop-filter backdrop-blur-md z-10"
  >
    <div
      class="
        m-auto
        flex
        items-center
        px-4
        sm:px-6
        xl:max-w-7xl xl:px-0
        justify-between
      "
    >
      <nuxt-link to="/">
        <img
          :src="'~/static' + navbar.logo"
          alt=""
          class="mr-3 h-10"
          srcset=""
        />
      </nuxt-link>

      <div class="flex items-center text-base leading-5">
        <div class="hidden sm:block">
          <nuxt-link
            v-for="(item, index) in items"
            :key="index"
            :to="item.href"
            class="
              p-1
              text-lg text-teal-800
              dark:text-teal-500
              sm:p-4
              hover:text-teal-900
            "
            >{{ item.title }}</nuxt-link
          >
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          class="ml-1 h-8 w-8 rounded p-1 sm:ml-4"
          @click="changeMode"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-teal-800 dark:stroke-teal-500"
          >
            <path
              v-if="$colorMode.value == 'light'"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
            <path
              v-if="$colorMode.value == 'dark'"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
        <!-- Toggle menu mobile icon -->
        <div
          class="sm:hidden ml-1 h-8 w-8 rounded p-1 sm:ml-4"
          @click="menu = !menu"
        >
          <icon-menu-bar v-if="!menu" />
          <icon-menu-bar-close v-else />
        </div>
      </div>
    </div>
    <!-- Mobile nav list -->
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 -translate-y-6"
      enter-to-class="transform opacity-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100"
      leave-to-class="transform opacity-0 -translate-y-6"
    >
      <nav class="w-full" v-show="menu" ref="navitems">
        <ul class="flex flex-col text-center">
          <li v-for="(item, index) in items" :key="index">
            <nuxt-link
              :to="item.href"
              class="text-lg text-teal-800 dark:text-teal-500 p-4 block"
            >
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
import IconMenuBar from '~/assets/icons/bars-3.svg?inline'
import IconMenuBarClose from '~/assets/icons/x-mark.svg?inline'

export default {
  components: {
    IconMenuBar,
    IconMenuBarClose,
  },
  data() {
    return {
      menu: false,
      items: [
        {
          title: 'Articles',
          href: '/articles',
        },
        {
          title: 'Tags',
          href: '/tags',
        },
        {
          title: 'Project',
          href: '/project',
        },
        {
          title: 'About',
          href: '/about',
        },
      ],
    }
  },
  computed: {
    navbar() {
      return this.$store.state.settings.navbar
    },
  },
  methods: {
    changeMode() {
      console.log(this.$colorMode.value)
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('scroll', function () {
        var navbar = document.getElementById('site-header')
        var nav_classes = navbar.classList
        if (document.documentElement.scrollTop >= 60) {
          if (nav_classes.contains('dark:bg-black/30') === false) {
            nav_classes.toggle('dark:bg-black/30')
          }
        } else {
          if (nav_classes.contains('dark:bg-black/30') === true) {
            nav_classes.toggle('dark:bg-black/30')
          }
        }
      })
    })
  },
}
</script>

<style>
a.nuxt-link-active {
  @apply font-semibold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  @apply text-teal-800;
}
</style>