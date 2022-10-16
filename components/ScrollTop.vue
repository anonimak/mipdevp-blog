<template>
  <div
    ref="scrollTopButton"
    class="
      z-10
      invisible
      fixed
      flex
      w-full
      justify-end
      lg:justify-start lg:w-auto
      bottom-0
      pb-3
      pr-8
      transition
    "
  >
    <div>
      <button
        @click="scrollToTop"
        role="button"
        aria-label="scroll to top of the page"
        class="border-teal-700 dark:text-teal-500 border-2 h-12 w-12 rounded-md"
      >
        <font-awesome-icon
          icon="fa-solid fa-up-long"
          class="text-teal-700 dark:text-teal-500 text-xl font-bold"
        />
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      const scrollBtn = this.$refs.scrollTopButton

      if (window.scrollY > 0) {
        scrollBtn.classList.remove('invisible')
      } else {
        scrollBtn.classList.add('invisible')
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
})
</script>
