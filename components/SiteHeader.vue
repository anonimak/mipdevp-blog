<template>
  <header
    id="site-header"
    class="
      w-auto
      p-4
      py-6
      sticky
      top-0
      bg-white
      dark:bg-slate-900
      bg-opacity-70
      backdrop-filter backdrop-blur-md
      dark:backdrop-blur-none
      z-10
    "
  >
    <div class="m-auto max-w-7xl flex items-center justify-between">
      <nuxt-link to="/">
        <img
          src="https://mipdevp.com/web/assets/img/logo-mipdevp-buat-website-terkini-terjangkau.png"
          alt=""
          class="mr-3 h-7 sm:h-10"
          srcset=""
        />
      </nuxt-link>

      <nav>
        <ul class="links">
          <li>
            <nuxt-link to="/blog" class="hover:text-teal-900">Blog</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>
