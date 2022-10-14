<style>
.__nuxt-error-page {
  padding: 1rem;
  background: #0f172a;
  color: #47494E;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 100 !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.__nuxt-error-page .error {
    width: 100rem;
    background-position: center;
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 35rem;
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
}
.__nuxt-error-page .title {
  font-size: 1rem;
  margin-top: 15px;
  color: #0f172a;
  margin-bottom: 8px;
}
.__nuxt-error-page .description {
  color: #7F828B;
  line-height: 21px;
  margin-bottom: 10px;
}
.__nuxt-error-page a {
  color: #0f172a;
  text-decoration: none;
}

.error-link{
  color: #0f172a;
    background:#0f172a;
    padding: 10px 20px;
    margin: 20px 0;
    margin-top: 20rem;
    display: inline-block;
}

.__nuxt-error-page .logo {
  position: fixed;
  left: 12px;
  bottom: 12px;
  color: #0f172a;
}

.__nuxt-error-page svg{
  margin-left:11rem;
  margin-top:1rem;
  color:red;
}
</style>


<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>