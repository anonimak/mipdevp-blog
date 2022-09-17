<template>
  <section class="p-4 mt-6 lg:mt-8 m-auto lg:max-w-4xl">
    <header class="prose lg:prose-xl mb-12 pb-8 lg:mb-16 lg:max-w-4xl">
      <h1 class="mb-0 dark:text-gray-100">It's nice you're here. Welcome.</h1>
      <p class="dark:text-gray-200">
        Have a look what I've been spending hours behind the screen writing
        about
      </p>
    </header>

    <ul>
      <li
        class="prose lg:prose-lg lg:max-w-4xl pl-0 py-2 list-none"
        v-for="article of articles"
        :key="article.slug"
      >
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <h2 class="mb-0 text-lg text-teal-700 hover:text-teal-800">
            {{ article.title }}
          </h2>
        </nuxt-link>
        <p class="dark:text-gray-300">{{ article.description }}</p>
        <div>
          <span class="text-opacity-50 text-sm">{{
            $dayjs(article.updatedAt).fromNow()
          }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'slug', 'updatedAt', 'description'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return { articles }
  },
}
</script>
