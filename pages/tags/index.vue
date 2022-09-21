<template>
  <main class="px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-7xl">
    <div class="flex flex-col divide-y divide-gray-200 dark:divide-gray-600">
      <div class="space-y-2 md:space-y-5 py-8 lg:pt-16">
        <h1
          class="
            text-4xl
            font-extrabold
            leading-9
            tracking-tight
            text-center
            md:text-left
            text-gray-900
            dark:text-teal-700
            sm:text-4xl sm:leading-10
            md:text-6xl md:leading-14
          "
        >
          Tags
        </h1>
      </div>
      <div class="flex flex-wrap">
        <div class="my-2 mx-auto md:mx-0" v-if="tags">
          <nuxt-link
            v-for="(value, key) in tags"
            :key="key"
            class="
              mr-3
              text-2xl
              sm:text-3xl
              font-medium
              uppercase
              text-teal-800
              hover:text-primary-600 hover:font-bold
              dark:hover:text-teal-500 dark:text-teal-700
            "
            :to="{ name: 'tags-slug', params: { slug: key } }"
            >{{ key }} ({{ value }})</nuxt-link
          >
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  async asyncData({ $content, store }) {
    const articles = await $content('articles')
      .only(['tags'])
      .where({ isactive: true })
      .sortBy('updatedAt', 'desc')
      .limit(store.state.settings.landings.front_limit)
      .fetch()

    let tags = []

    articles.forEach((article) => {
      article.tags.forEach((tag) => {
        tags.push(tag)
      })
    })
    tags = tags.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1
      return acc
    }, {})

    return { tags }
  },
}
</script>