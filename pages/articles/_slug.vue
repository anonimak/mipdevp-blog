<template>
  <div class="lg:grid gap-4 lg:grid-cols-3">
    <article
      class="
        pt-8
        lg:col-span-2
        prose
        dark:prose-invert
        lg:prose-xl
        mt-6
        lg:mt-8
        sm:px-6
        md:px-8
        xl:px-12
        lg:max-w-7xl
      "
    >
      <header class="mb-12 pb-8 lg:mb-16 border-gray-200 border-b-2">
        <h2 class="mb-0 dark:text-teal-700 uppercase">{{ article.title }}</h2>
        <p class="dark:text-gray-200">{{ article.description }}</p>

        <!-- container for article details -->
        <div>
          <!-- the format date function converts the default date to a readable form -->
          <span class="text-opacity-50 text-sm">{{
            $dayjs(article.date).format('DD MMMM, YYYY')
          }}</span>
        </div>
        <badge-tag v-for="tag in article.tags" :key="tag" :slug="tag">{{
          tag
        }}</badge-tag>

        <div class="flex my-2">
          <ShareNetwork
            v-for="network in networks"
            :network="network.network"
            :key="network.network"
            :style="{ backgroundColor: network.color }"
            :url="sharing.url"
            :title="sharing.title"
            :description="sharing.description"
            :quote="sharing.quote"
            :hashtags="sharing.hashtags"
            :twitterUser="sharing.twitterUser"
          >
            <font-awesome-icon
              :icon="network.icon"
              class="text-white fa-fw fa-lg mx-2"
            />
          </ShareNetwork>
        </div>
      </header>
      <!-- this is where we will render the article contents -->
      <nuxt-content class="dark:text-gray-200" :document="article" />
      <prev-next :prev="prev" :next="next"></prev-next>
      <Disqus class="pt-10" :pageConfig="disqusConfig" />
    </article>
    <div class="sm:flex-none sm:w-96 sm:pl-8 sm:mr-8 xl:text-sm block">
      <scroll-top />
      <div
        class="
          flex
          overflow-y-auto
          sticky
          top-28
          flex-col
          justify-start
          pt-10
          pb-20
          sm:h-[calc(100vh-5rem)]
        "
      >
        <card-author :article="article" />
        <card-tag class="mt-4" :articles="articles" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {},
      articles: [],
      disqusConfig: {},
      prev: null,
      next: null,
      networks: [
        { network: 'facebook', icon: ['fab', 'facebook-f'], color: '#1877f2' },
        { network: 'twitter', icon: ['fab', 'twitter'], color: '#1da1f2' },
        {
          network: 'telegram',
          icon: ['fab', 'telegram-plane'],
          color: '#0088cc',
        },
        { network: 'whatsapp', icon: ['fab', 'whatsapp'], color: '#25d366' },
      ],
      sharing: {
        url: this.$config.baseURL + this.$route.fullPath,
        title: '',
        description: '',
        quote: '',
        hashtags: '',
        twitterUser: 'mipdevp',
      },
    }
  },
  watch: {
    article: function (val) {
      this.sharing.title = this.article.title
      this.sharing.description = this.article.description
      this.sharing.hashtags = this.article.tags.toString()
    },
  },
  async fetch() {
    //here, we will fetch the article from the article/ folder based on the name provided in the 'params.slug`
    this.article = await this.$content('articles', this.$route.params.slug)
      .where({ isactive: { $ne: false } })
      .fetch()

    const [prev, next] = await this.$content('articles')
      .where({ isactive: { $ne: false } })
      // fetch only the title and slug from the articles
      .only(['title', 'slug', 'date', 'isactive'])
      // sortby time updated, in ascending order
      .sortBy('date', 'asc')
      // get the correct slug
      .surround(this.$route.params.slug)
      // fetch data
      .fetch()

    this.prev = prev
    this.next = next

    this.disqusConfig = {
      title: `blog-mipdevp-${this.article.title}`,
      identifier: `blog-mipdevp-${this.article.slug}`,
    }

    this.articles = await this.$content('articles')
      .only(['title', 'slug', 'date', 'description', 'tags'])
      .where({
        isactive: { $ne: false },
        slug: { $ne: this.article.slug },
        tags: { $containsAny: this.article.tags },
      })
      .limit(3)
      .sortBy('date', 'desc')
      .fetch()

    // return the data to be vailable for use in the file
    // return { article, prev, next, disqusConfig, articles }
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'article:published_time',
          property: 'article:published_time',
          content: this.article.date,
        },
        {
          hid: 'article:tag',
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
        {
          hid: 'article:description',
          name: 'article:description',
          content: this.article.description,
        },
        {
          hid: 'article:title',
          name: 'article:title',
          content: this.article.title,
        }, // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://mipdevp.com/blog/${this.article.slug}`,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    }
  },
}
</script>
