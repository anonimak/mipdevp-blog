<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>


<script>
import error404 from '~/components/error/404.vue';
export default {
  name: 'nuxt-error',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
     errorPage() {
      return error404
    },
  },
}
</script>




