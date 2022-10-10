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
    <Pagination
      v-if="!search"
      :prevPage="pageNo > 1"
      :nextPage="nextPage"
      :pageNo="pageNo"
      urlPrefix="/articles/all"
    />
  </main>
</template>

<script>
import CardArticleLarge from '~/components/CardArticleLarge.vue'
export default {
  components: { CardArticleLarge },
  async asyncData({ $content, store, route }) {
    const pageNo = parseInt(route.params.number)
    const numArticles = 2

    const articles = await $content('articles')
      .only(['title', 'slug', 'date', 'description', 'tags'])
      .where({ isactive: { $ne: false } })
      .limit(numArticles)
      .skip(numArticles * (pageNo - 1))
      .sortBy('date', 'desc')
      .fetch()
    if (!articles.length) {
      return error({ statusCode: 404, message: 'No articles found!' })
    }
    const nextPage = articles.length === numArticles

    return { nextPage, articles, pageNo }
  },

  data() {
    return {
      search: '',
    }
  },

  watch: {
    async search(search) {
      if (!search) {
        this.$router.push('/articles')
      }
      this.articles = await this.$content('articles')
        .only(['title', 'slug', 'date', 'description', 'tags'])
        .sortBy(['title', 'slug', 'date', 'description', 'tags'])
        .where({ isactive: { $ne: false } })
        .limit(10)
        .search(search)
        .fetch()
    },
  },
}
</script>
