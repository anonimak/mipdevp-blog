<template>
  <div
    class="min-h-screen transition-colors duration-[50]"
    :class="$colorMode.value == 'dark' ? 'dark bg-slate-900' : 'bg-white'"
  >
    <site-header />
    <div
      class="
        flex flex-col
        min-h-screen
        justify-between
        mx-auto
        max-w-3xl
        px-4
        sm:px-6
        xl:max-w-7xl xl:px-0
      "
    >
      <Nuxt class="flex-grow" />
    </div>
    <site-footer />
    <scroll-top />
  </div>
</template>
<script>
export default {
  head() {
    const { path } = this.$route
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`
    let canonical = `https://mipdevp.com/blog${pathWithSlash}`

    const title = 'Opini | Tutorial | Panduan'
    const description =
      'blog yang terangkum informasi tentang opini-opini isu programming yang populer maupun terkini dari pandangan MIPDEVP, memberikan tutorial dan panduang yang mudah-mudahan sampai kepada para pencari tutorial ^^'

    return {
      meta: [
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },

        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ],
      link: [{ rel: 'canonical', href: canonical }],
    }
  },
}
</script>
