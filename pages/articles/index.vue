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
      :nextPage="nextPage"
      :pageNo="1"
      urlPrefix="/articles/all"
    />
  </main>
</template>

<script>
import CardArticleLarge from '~/components/CardArticleLarge.vue'
export default {
  components: { CardArticleLarge },

  async asyncData({ $content, store, route }) {
    const pageNo = 1
    const numArticles = store.state.settings.blogs.front_limit

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
        const numArticles = this.$store.state.settings.blogs.front_limit
        this.articles = await this.$content('articles')
          .only(['title', 'slug', 'date', 'description', 'tags'])
          .where({ isactive: { $ne: false } })
          .limit(numArticles)
          .skip(numArticles * (this.pageNo - 1))
          .sortBy('date', 'desc')
          .fetch()
        return
      }
      this.articles = await this.$content('articles')
        .only(['title', 'slug', 'date', 'description', 'tags'])
        .sortBy(['title', 'slug', 'date', 'description', 'tags'])
        .where({ isactive: { $ne: false } })
        .search(search)
        .fetch()
    },
  },
  head() {
    const title = 'Articles'
    const description = 'MIPDEVP Blog - All article'

    return {
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ],
    }
  },
}
</script>
