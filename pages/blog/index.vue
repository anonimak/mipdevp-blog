<template>
  <main class="pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-7xl">
    <div class="divide-y divide-gray-200 dark:divide-gray-600">
      <div class="space-y-2 md:space-y-5 py-8 lg:pt-16">
        <h1
          class="
            text-4xl
            space-y-2
            pb-8
            font-extrabold
            leading-9
            tracking-tight
            text-gray-900
            dark:text-gray-100
            sm:text-4xl sm:leading-10
            md:text-6xl md:leading-14
          "
        >
          Blog
        </h1>
        <input-search />
      </div>

      <ul>
        <li class="py-4" v-for="article of articles" :key="article.slug">
          <card-article :article="article" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import CardArticleLarge from '~/components/CardArticleLarge.vue'
export default {
  components: { CardArticleLarge },
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'slug', 'updatedAt', 'description', 'tags'])
      .where({ isactive: true })
      .sortBy('updatedAt', 'desc')
      .fetch()

    return { articles }
  },
}
</script>
