<template>
  <article
    class="
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
      <badge-tag v-for="tag in article.tags" :key="tag">{{ tag }}</badge-tag>
    </header>
    <!-- this is where we will render the article contents -->
    <nuxt-content class="dark:text-gray-200" :document="article" />
    <prev-next :prev="prev" :next="next"></prev-next>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    //here, we will fetch the article from the article/ folder based on the name provided in the 'params.slug`
    const article = await $content('articles', params.slug)
      .where({ isactive: true })
      .fetch()
    const [prev, next] = await $content('articles')
      .where({ isactive: true })
      // fetch only the title and slug from the articles
      .only(['title', 'slug', 'updatedAt', 'isactive'])
      // sortby time updated, in ascending order
      .sortBy('updatedAt', 'asc')
      // get the correct slug
      .surround(params.slug)
      // fetch data
      .fetch()

    // return the data to be vailable for use in the file
    return { article, prev, next }
  },
}
</script>
