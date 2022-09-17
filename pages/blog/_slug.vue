<template>
  <article class="prose lg:prose-xl p-4 mt-6 lg:mt-8 m-auto lg:max-w-4xl">
    <header class="mb-12 pb-8 lg:mb-16 border-gray-200 border-b-2">
      <h1 class="mb-0 dark:text-teal-700">{{ article.title }}</h1>
      <p class="dark:text-gray-200">{{ article.description }}</p>

      <!-- container for article details -->
      <div>
        <!-- the format date function converts the default date to a readable form -->
        <span class="text-opacity-50 text-sm">{{
          $dayjs(article.updatedAt).fromNow()
        }}</span>
      </div>
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
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      // fetch only the title and slug from the articles
      .only(['title', 'slug', 'updatedAt'])
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
