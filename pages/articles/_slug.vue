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
        <h1 class="mb-0 dark:text-teal-700">{{ article.title }}</h1>
        <p class="dark:text-gray-200">{{ article.description }}</p>

        <!-- container for article details -->
        <div>
          <!-- the format date function converts the default date to a readable form -->
          <span class="text-opacity-50 text-sm">{{
            $dayjs(article.updatedAt).format('DD MMMM, YYYY')
          }}</span>
        </div>
        <badge-tag v-for="tag in article.tags" :key="tag" :slug="tag">{{
          tag
        }}</badge-tag>
      </header>
      <!-- this is where we will render the article contents -->
      <nuxt-content class="dark:text-gray-200" :document="article" />
      <prev-next :prev="prev" :next="next"></prev-next>
      <Disqus class="pt-10" :pageConfig="disqusConfig" />
    </article>
    <div class="sm:flex-none sm:w-96 sm:pl-8 sm:mr-8 xl:text-sm block">
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
  async asyncData({ $content, params }) {
    //here, we will fetch the article from the article/ folder based on the name provided in the 'params.slug`
    const article = await $content('articles', params.slug)
      .where({ isactive: { $ne: false } })
      .fetch()
    const [prev, next] = await $content('articles')
      .where({ isactive: { $ne: false } })
      // fetch only the title and slug from the articles
      .only(['title', 'slug', 'updatedAt', 'isactive'])
      // sortby time updated, in ascending order
      .sortBy('updatedAt', 'asc')
      // get the correct slug
      .surround(params.slug)
      // fetch data
      .fetch()

    const disqusConfig = {
      title: `blog-mipdevp-${article.title}`,
      identifier: `blog-mipdevp-${article.slug}`,
    }

    const articles = await $content('articles')
      .only(['title', 'slug', 'updatedAt', 'description', 'tags'])
      .where({
        isactive: { $ne: false },
        slug: { $ne: article.slug },
        tags: { $containsAny: article.tags },
      })
      .limit(3)
      .sortBy('date', 'desc')
      .fetch()

    // return the data to be vailable for use in the file
    return { article, prev, next, disqusConfig, articles }
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        }, // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        }, // Twitter Card
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
