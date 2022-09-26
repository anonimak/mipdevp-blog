<template>
  <div
    class="
      block
      p-8
      overflow-hidden
      border border-gray-100
      bg-slate-50
      dark:border-gray-500 dark:bg-slate-800
      rounded-lg
    "
  >
    <div class="justify-start sm:flex mb-4">
      <div class="border-b-2">
        <h5 class="text-xl font-bold text-gray-900 dark:text-gray-200">
          More from
          <nuxt-link class="text-teal-600 hover:text-teal-700" to="/tags"
            >#Tags</nuxt-link
          >
        </h5>
      </div>
    </div>
    <div class="mt-4">
      <div v-for="article in articles" :key="article.slug">
        <nuxt-link
          class="
            text-sm text-teal-500
            hover:text-teal-600 hover:font-normal
            dark:text-gray-400 dark:hover:text-teal-500
          "
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        >
          {{ article.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['articles'],
}
</script>