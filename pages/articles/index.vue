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
            dark:text-teal-700
            sm:text-4xl sm:leading-10
            md:text-6xl md:leading-14
          "
        >
          Articles
        </h1>
        <input-search v-model="search" />
      </div>

      <ul>
        <li class="py-4" v-for="article of articles" :key="article.slug">
          <card-article :article="article" />
        </li>
      </ul>
    </div>
    <!-- <Pagination :nextPage="nextPage" :pageNo="1" urlPrefix="/blog/all" /> -->
  </main>
</template>

<script>
import CardArticleLarge from '~/components/CardArticleLarge.vue'
export default {
  components: { CardArticleLarge },

  async asyncData({ $content, store, params }) {
    const articles = await $content('articles')
      .only(['title', 'slug', 'updatedAt', 'description', 'tags'])
      .where({ isactive: { $ne: false } })
      .limit(store.state.settings.blogs.front_limit)
      .sortBy('date', 'desc')
      .fetch()
    if (!articles.length) {
      return error({ statusCode: 404, message: 'No articles found!' })
    }

    return { articles }
  },

  data() {
    return {
      search: '',
    }
  },

  watch: {
    async search(search) {
      if (!search) {
        // this.search = []
        return
      }
      this.articles = await this.$content('articles')
        .only(['title', 'slug', 'updatedAt', 'description', 'tags'])
        .sortBy(['title', 'slug', 'updatedAt', 'description', 'tags'])
        .where({ isactive: { $ne: false } })
        .limit(10)
        .search(search)
        .fetch()
    },
  },
}
</script>