<template>
  <div
    class="min-h-screen"
    :class="$colorMode.value == 'dark' ? 'dark bg-slate-900' : 'bg-white'"
  >
    <div
      class="
        flex flex-col
        min-h-screen
        justify-between
        mx-auto
        max-w-3xl
        px-4
        sm:px-6
        xl:max-w-5xl xl:px-0
      "
    >
      <site-header />
      <Nuxt class="flex-grow" />
      <site-footer />
    </div>
  </div>
</template>