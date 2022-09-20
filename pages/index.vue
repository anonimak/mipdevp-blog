<template>
  <main
    class="
      bg-white
      dark:bg-gray-900
      max-w-[52rem]
      mx-auto
      px-4
      pb-28
      sm:px-6
      md:px-8
      xl:px-12
      lg:max-w-6xl
    "
  >
    <header class="my-4">
      <div
        class="w-full bg-bottom bg-fixed bg-cover"
        :style="
          landings.hero.image && {
            'background-image': `url(${landings.hero.image})`,
          }
        "
      >
        <div
          class="
            py-8
            px-4
            mx-auto
            max-w-screen-xl
            text-center
            lg:py-16 lg:px-12
          "
        >
          <h1
            class="
              mb-6
              text-4xl
              font-extrabold
              tracking-tight
              leading-none
              text-black
              md:text-5xl
              lg:text-6xl
              dark:text-white
            "
          >
            {{ landings.hero.title
            }}<span class="text-teal-700">{{ title }}</span>
          </h1>
          <p
            class="
              mb-8
              text-lg
              font-normal
              text-gray-800
              lg:text-xl
              sm:px-16
              xl:px-48
              dark:text-gray-300
            "
          >
            {{ landings.hero.description }}
          </p>
        </div>
      </div>
    </header>

    <div
      class="
        relative
        sm:pb-12 sm:ml-[calc(2rem+1px)]
        md:ml-[calc(3.5rem+1px)]
        lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]
      "
    >
      <div class="space-y-16">
        <article class="relative group">
          <div
            class="
              absolute
              -inset-y-2.5 -inset-x-4
              md:-inset-y-4 md:-inset-x-6
              sm:rounded-2xl
              group-hover:bg-slate-50/70
              dark:group-hover:bg-slate-800/50
            "
          ></div>
          <div class="relative">
            <h3
              class="
                text-base
                font-semibold
                tracking-tight
                text-slate-900
                dark:text-slate-200
                pt-8
                lg:pt-0
              "
            >
              We built you a new personal website + Heroicons v2.0, Headless UI
              v1.7, and more
            </h3>
            <div class="flex py-2">
              <badge>#general</badge>
              <badge>#discuse</badge>
              <badge>#vue</badge>
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
                We just released a stunning new personal website template for
                Tailwind UI, redesigned Heroicons from scratch, tagged a new
                version of Headless UI with some exciting new features, and
                more.
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
              <dd
                class="whitespace-nowrap text-sm leading-6 dark:text-slate-400"
              >
                <time datetime="2022-09-09T16:24:00.000Z">
                  September 9, 2022
                </time>
              </dd>
            </dl>
          </div>
          <a
            class="flex items-center text-sm text-sky-500 font-medium"
            href="/blog/2022-09-09-new-personal-website-heroicons-2-headless-ui-v17"
          >
            <!-- <span
              class="
                absolute
                -inset-y-2.5 -inset-x-4
                md:-inset-y-4 md:-inset-x-6
                sm:rounded-2xl
              "
            ></span> -->
            <span class="relative">
              Read more
              <span class="sr-only"
                >,
                <!-- -->We built you a new personal website + Heroicons v2.0,
                Headless UI v1.7, and more
              </span>
            </span>
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
          </a>
        </article>
      </div>
    </div>
  </main>
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
      .where({ isactive: true })
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