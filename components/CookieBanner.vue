<template>
  <div
    v-show="showBanner"
    class="p-4 md:flex md:justify-between md:items-end bg-gray-700 text-white w-full fixed left-0 bottom-0"
  >
    <section class="mr-6">
      <h3 class="text-2xl">Cookies</h3>
      <p>
        We use cookies so that we can show you this website and better
        understand how you use it, with a view to improving the services we
        offer.
      </p>
    </section>
    <section class="flex justify-end md:justify-start">
      <button class="text-sm hover:underline mr-4" @click="showBanner = false">
        Deny
      </button>
      <button
        class="bg-light hover:bg-dark py-2 px-4 rounded-full w-40"
        @click="confirmCookies"
      >
        Accept all
      </button>
    </section>
  </div>
</template>

<script>
import { bootstrap } from 'vue-gtag'
export default {
  data() {
    return {
      showBanner: false,
    }
  },
  mounted() {
    if (process.browser) {
      this.showBanner = !localStorage.getItem('gtag')
    }
  },
  methods: {
    confirmCookies() {
      bootstrap().then((gtag) => {
        localStorage.setItem('gtag', 'true')
        this.showBanner = false
      })
    },
  },
}
</script>

<style scoped></style>
