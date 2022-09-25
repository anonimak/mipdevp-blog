<template>
  <main class="max-w-[52rem] pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-7xl">
    <hero />
    <h2
      class="
        text-2xl
        space-y-2
        font-bold
        leading-9
        tracking-tight
        text-gray-900
        dark:text-teal-700
        sm:text-2xl sm:leading-10
        md:text-3xl md:leading-14
      "
    >
      Latest Article
    </h2>
    <hr
      class="
        my-2
        w-20
        h-1
        bg-gray-100
        rounded-r
        border-0
        mb-10
        dark:bg-gray-700
      "
    />
    <div
      class="
        relative
        px-4
        sm:pb-12
        md:ml-[calc(3.5rem+1px)]
        lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]
      "
    >
      <div class="space-y-10 sm:space-y-16">
        <card-article-large
          v-for="(article, index) in articles"
          :key="index"
          :slug="article.slug"
        >
          <template v-slot:title>
            {{ article.title }}
          </template>
          <template v-slot:description>
            {{ article.description }}
          </template>
          <template v-slot:publish-date>
            {{ $dayjs(article.updatedAt).format('DD MMMM, YYYY') }}
          </template>
          <template v-slot:tag-field>
            <div v-if="article.tags">
              <badge-tag
                v-for="(tag, indextag) in article.tags"
                :key="indextag"
                :slug="tag"
                >{{ tag }}</badge-tag
              >
            </div>
          </template>
        </card-article-large>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, store }) {
    const articles = await $content('articles')
      .only(['title', 'slug', 'updatedAt', 'description', 'tags'])
      .where({ isactive: { $ne: false } })
      .sortBy('date', 'desc')
      .limit(store.state.settings.landings.front_limit)
      .fetch()

    console.log(articles)

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