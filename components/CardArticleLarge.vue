<template>
  <article class="relative group">
    <div
      class="
        absolute
        -inset-y-2.5 -inset-x-4
        md:-inset-y-4 md:-inset-x-6
        rounded-2xl
        bg-slate-100/100
        dark:bg-slate-800/50
      "
    ></div>
    <div class="relative">
      <h3
        class="
          text-xl
          font-semibold
          tracking-tight
          text-slate-900
          dark:text-slate-200
          pt-8
          lg:pt-0
        "
      >
        <slot name="title"></slot>
      </h3>
      <div class="flex py-2">
        <slot name="tag-field"></slot>
      </div>
      <div
        class="
          mt-2
          mb-4
          prose prose-slate
          prose-a:relative prose-a:z-10
          dark:prose-dark
          line-clamp-2
        "
      >
        <p>
          <slot name="description"></slot>
        </p>
      </div>
      <dl
        class="
          absolute
          left-0
          top-0
          lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]
        "
      >
        <dt class="sr-only">Date</dt>
        <dd class="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
          <time datetime="2022-09-09T16:24:00.000Z"
            ><slot name="publish-date"></slot
          ></time>
        </dd>
      </dl>
    </div>
    <nuxt-link
      class="flex items-center text-sm text-sky-500 font-medium"
      :to="{ name: 'articles-slug', params: { slug: slug } }"
    >
      <span class="relative">Read more</span>
      <svg
        class="
          relative
          mt-px
          overflow-visible
          ml-2.5
          text-sky-300
          dark:text-sky-700
        "
        width="3"
        height="6"
        viewBox="0 0 3 6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M0 0L3 3L0 6"></path>
      </svg>
    </nuxt-link>
  </article>
</template>
<script>
export default {
  props: {
    slug: {
      default: '#',
    },
  },
}
</script>