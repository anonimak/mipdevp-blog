<template>
  <nuxt-link :to="{ name: 'tags-slug', params: { slug: slug } }">
    <span class="badge mr-1">
      <slot></slot>
    </span>
  </nuxt-link>
</template>
<script>
export default {
  props: ['slug'],
}
</script>
<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-teal-200 group-hover:bg-teal-400 dark:bg-teal-800 dark:group-hover:bg-teal-700 rounded-full px-2 py-0.5 text-sm font-semibold text-gray-700 dark:text-gray-200;
}
</style>