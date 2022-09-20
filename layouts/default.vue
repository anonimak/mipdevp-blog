<template>
  <div
    :class="$colorMode.value == 'dark' ? 'dark bg-slate-900' : 'bg-white'"
    class="flex flex-col min-h-screen"
  >
    <site-header />
    <Nuxt class="flex-grow" />
    <site-footer />
  </div>
</template>