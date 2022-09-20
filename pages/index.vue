<template>
  <main class="max-w-[52rem] pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-7xl">
    <hero />

    <div
      class="
        relative
        px-4
        sm:pb-12
        md:ml-[calc(3.5rem+1px)]
        lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]
      "
    >
      <div class="space-y-16">
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
      .where({ isactive: true })
      .sortBy('updatedAt', 'desc')
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