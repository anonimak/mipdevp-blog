<template>
  <div
    class="
      block
      p-8
      overflow-hidden
      border border-gray-100
      dark:border-gray-500
      rounded-lg
    "
  >
    <div class="justify-start sm:flex">
      <div class="flex-shrink-0 hidden mr-3 sm:block">
        <img
          alt="Paul Clapton"
          :src="author.authorimage"
          class="object-cover w-16 h-16 rounded-lg shadow-sm"
        />
      </div>
      <div>
        <h5 class="text-xl font-bold text-gray-900 dark:text-gray-200">
          {{ author.name }}
        </h5>

        <p class="mt-1 text-xs font-medium text-teal-500">{{ author.email }}</p>
      </div>
    </div>

    <div class="mt-4 sm:pr-8">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ author.shortbio }}
      </p>
    </div>

    <dl class="flex mt-6">
      <div class="flex flex-col-reverse">
        <dt class="text-sm font-medium text-gray-600 dark:text-gray-300">
          Published
        </dt>
        <dd class="text-xs text-gray-500">
          {{ $dayjs(article.updatedAt).format('DD MMMM, YYYY') }}
        </dd>
      </div>
    </dl>
  </div>
</template>
<script>
export default {
  props: ['article'],
  data() {
    return {
      author: {},
    }
  },
  async fetch() {
    const author = await this.$content('authors')
      .where({ email: this.article.author })
      .limit(1)
      .fetch()
    this.author = author[0]
  },
}
</script>