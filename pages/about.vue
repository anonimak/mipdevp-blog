<template>
  <main class="pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-7xl">
    <div class="divide-y divide-gray-200 dark:divide-gray-600">
      <div class="space-y-2 md:space-y-5 py-8 lg:pt-16">
        <h1
          class="
            text-4xl
            space-y-2
            pb-8
            font-extrabold
            leading-9
            tracking-tight
            text-gray-900
            dark:text-teal-700
            sm:text-4xl sm:leading-10
            md:text-6xl md:leading-14
          "
        >
          About
        </h1>
      </div>
      <div class="items-start space-y-2">
        <div class="flex flex-col items-center pt-8">
          <h3
            class="
              pt-4
              pb-2
              text-2xl
              xl:text-4xl
              font-bold
              leading-8
              tracking-tight
              dark:text-gray-100
            "
          >
            {{ about.title }}
          </h3>
          <div class="text-gray-500 dark:text-gray-400">
            {{ about.sub_title }}
          </div>
          <div class="flex space-x-3 pt-6">
            <a
              class="text-sm text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              :href="`mailto:${about.social_media.email}`"
              ><span class="sr-only">mail</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                class="
                  fill-current
                  text-gray-700
                  hover:text-teal-500
                  dark:text-gray-200 dark:hover:text-teal-400
                  h-8
                  w-8
                "
              >
                <path
                  d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"
                ></path>
                <path
                  d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"
                ></path></svg></a
            ><a
              class="text-sm text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              :href="about.social_media.youtube"
              ><span class="sr-only">youtube</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="
                  fill-current
                  text-gray-700
                  hover:text-teal-500
                  dark:text-gray-200 dark:hover:text-teal-400
                  h-8
                  w-8
                "
                viewBox="-35.20005 -41.33325 305.0671 247.9995"
              >
                <path
                  d="M93.333 117.559V47.775l61.334 34.893zm136.43-91.742c-2.699-10.162-10.651-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.555 7.652 7.603 15.655 4.904 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.904 56.849c2.699 10.163 10.65 18.165 20.747 20.883 18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.683-4.934c10.096-2.718 18.048-10.72 20.747-20.883 4.904-18.42 4.904-56.85 4.904-56.85s0-38.43-4.904-56.849"
                /></svg></a
            ><a
              class="text-sm text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              :href="about.social_media.twitter"
              ><span class="sr-only">twitter</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="
                  fill-current
                  text-gray-700
                  hover:text-teal-500
                  dark:text-gray-200 dark:hover:text-teal-400
                  h-8
                  w-8
                "
                viewBox="-44.7006 -60.54775 387.4052 363.2865"
              >
                <path
                  d="M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464"
                /></svg></a
            ><a
              class="text-sm text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              :href="about.social_media.instagram"
              ><span class="sr-only">instagram</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="
                  fill-current
                  text-gray-700
                  hover:text-teal-500
                  dark:text-gray-200 dark:hover:text-teal-400
                  h-8
                  w-8
                "
                viewBox="-100.7682 -167.947 873.3244 1007.682"
              >
                <path
                  d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959"
                />
                <path
                  d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308"
                /></svg
            ></a>
          </div>
        </div>
        <div class="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
          {{ about.body }}
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  computed: {
    about() {
      return this.$store.state.settings.about
    },
  },
  head() {
    const title = 'About'
    const description = this.about.body

    return {
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
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
        // Twitter Card
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
    }
  },
}
</script>