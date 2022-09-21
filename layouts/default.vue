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
  </div>
</template>