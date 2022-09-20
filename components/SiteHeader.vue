<template>
  <header
    id="site-header"
    class="
      w-auto
      p-4
      py-6
      sticky
      top-0
      bg-white
      dark:bg-slate-900 dark:bg-opacity-50
      bg-opacity-70
      backdrop-filter backdrop-blur-md
      z-10
    "
  >
    <div class="m-auto flex items-center justify-between">
      <nuxt-link to="/">
        <img :src="navbar.logo" alt="" class="mr-3 h-7 sm:h-10" srcset="" />
      </nuxt-link>

      <div class="flex items-center text-base leading-5">
        <div class="hidden sm:block">
          <nuxt-link
            to="/blog"
            class="p-1 font-medium text-teal-800 dark:text-teal-500 sm:p-4"
            >Blog</nuxt-link
          >
          <nuxt-link
            to="/tags"
            class="p-1 font-medium text-teal-800 dark:text-teal-500 sm:p-4"
            >Tags</nuxt-link
          >
          <nuxt-link
            to="/project"
            class="p-1 font-medium text-teal-800 dark:text-teal-500 sm:p-4"
          >
            Project
          </nuxt-link>
          <nuxt-link
            to="/about"
            class="p-1 font-medium text-teal-800 dark:text-teal-500 sm:p-4"
            >About</nuxt-link
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-teal-800 dark:stroke-teal-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- Mobile nav list -->
    <nav class="w-full" v-show="menu">
      <ul class="flex flex-col text-center">
        <li v-for="(item, index) in items" :key="index">
          <nuxt-link
            :to="item.href"
            class="text-teal-800 dark:text-teal-500 p-6 block"
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      items: [
        {
          title: 'Blog',
          href: 'blog',
        },
        {
          title: 'Tags',
          href: 'tags',
        },
        {
          title: 'Project',
          href: 'project',
        },
        {
          title: 'About',
          href: 'about',
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
}
</script>
