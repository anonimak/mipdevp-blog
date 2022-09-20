<template>
  <nuxt-link :to="{ name: 'blog-slug', params: { slug: slug } }">
    <span class="badge mr-2">
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
  @apply inline-block bg-emerald-100 dark:bg-emerald-700 rounded-full px-2 py-0.5 text-sm font-semibold text-gray-700 dark:text-gray-200;
}
</style>