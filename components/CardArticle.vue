<template>
  <article
    class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
  >
    <dl>
      <dt class="sr-only">Published on</dt>
      <dd
        class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
      >
        <time datetime="2019-10-11T00:00:00.000Z">{{
          $dayjs(article.updatedAt).format('DD MMMM, YYYY')
        }}</time>
      </dd>
    </dl>
    <div class="space-y-3 xl:col-span-3">
      <div>
        <h3 class="text-2xl font-bold leading-8 tracking-tight">
          <nuxt-link
            class="text-gray-900 dark:text-gray-100 dark:hover:text-gray-400"
            :to="{ name: 'articles-slug', params: { slug: article.slug } }"
            >{{ article.title }}</nuxt-link
          >
        </h3>
        <div class="flex flex-wrap" v-if="article.tags">
          <nuxt-link
            v-for="(tag, index) in article.tags"
            :key="index"
            class="
              mr-3
              text-sm
              font-medium
              lowercase
              text-teal-800
              hover:text-primary-600
              dark:hover:text-teal-500 dark:text-teal-700
            "
            :to="{ name: 'tags-slug', params: { slug: tag } }"
            >{{ tag }}</nuxt-link
          >
        </div>
      </div>
      <div class="prose max-w-none text-gray-500 dark:text-gray-400">
        {{ article.description }}
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: ['article'],
}
</script>