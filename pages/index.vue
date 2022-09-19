<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
    >
      <h1
        class="
          mb-6
          text-4xl
          font-extrabold
          tracking-tight
          leading-none
          text-gray-900
          md:text-5xl
          lg:text-6xl
          dark:text-white
        "
      >
        {{ landings.hero.title }}<span class="text-teal-700">{{ title }}</span>
      </h1>
      <p
        class="
          mb-8
          text-lg
          font-normal
          text-gray-500
          lg:text-xl
          sm:px-16
          xl:px-48
          dark:text-gray-400
        "
      >
        {{ landings.hero.description }}
      </p>
    </div>
    <div class="p-4 mt-6 lg:mt-8 m-auto lg:max-w-4xl">
      <ul>
        <li
          class="prose lg:prose-lg lg:max-w-4xl pl-0 py-2 list-none"
          v-for="article of articles"
          :key="article.slug"
        >
          <nuxt-link
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          >
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
      <div class="mt-4 flex justify-center">
        <nuxt-link
          to="/blog"
          href="#"
          class="
            inline-flex
            justify-between
            items-center
            py-1
            px-1
            pr-4
            mb-7
            text-sm text-gray-700
            bg-gray-100
            rounded-full
            dark:bg-gray-800 dark:text-white
            hover:bg-gray-200
            dark:hover:bg-gray-700
          "
          role="alert"
        >
          <span class="ml-3 text-sm font-medium">See all posts</span>
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    landings() {
      return this.$store.state.settings.landings
    },
    title() {
      return this.$store.state.settings.site_title
    },
  },
  async asyncData({ $content, store }) {
    const articles = await $content('articles')
      .only(['title', 'slug', 'updatedAt', 'description'])
      .sortBy('createdAt', 'desc')
      .limit(store.state.settings.landings.front_limit)
      .fetch()

    return { articles }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
