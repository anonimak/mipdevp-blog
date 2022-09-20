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
    <div class="m-auto max-w-6xl flex items-center justify-between">
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
          class="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
          @click="changeMode"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="text-teal-800 dark:text-teal-500"
          >
            <path
              v-if="$colorMode.value == 'light'"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
            <path
              v-if="$colorMode.value == 'dark'"
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
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
