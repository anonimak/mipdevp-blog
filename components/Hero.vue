<template>
  <header class="my-4">
    <div
      class="w-full bg-bottom bg-fixed bg-cover"
      :style="
        landings.hero.image && {
          'background-image': `url(${landings.hero.image})`,
        }
      "
    >
      <div class="py-8 mx-auto max-w-screen-xl lg:py-16">
        <h1
          class="
            mb-6
            text-4xl
            font-extrabold
            tracking-tight
            leading-none
            text-black
            md:text-5xl
            lg:text-6xl
            dark:text-white
          "
        >
          {{ landings.hero.title
          }}<span class="text-teal-700">{{ title }}</span>
        </h1>
        <p
          class="
            mb-8
            text-lg
            font-normal
            text-gray-800
            lg:text-xl
            dark:text-slate-400
          "
        >
          {{ landings.hero.description }}
        </p>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    landings() {
      return this.$store.state.settings.landings
    },
    title() {
      return this.$store.state.settings.site_title
    },
  },
}
</script>