<template>
  <div
    ref="scrollTopButton"
    class="invisible fixed w-full flex justify-start bottom-0 pb-3 pl-4 lg:pl-5 transition"
  >
    <div>
      <button
        @click="scrollToTop"
        role="button"
        aria-label="scroll to top of the page"
        class="border-teal-800 dark:text-teal-500 border-2 h-8 w-8 rounded-full"
      >
        <font-awesome-icon
          icon="fa-solid fa-up-long"
          class="text-teal-800 dark:text-teal-500 text-xl font-bold"
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
