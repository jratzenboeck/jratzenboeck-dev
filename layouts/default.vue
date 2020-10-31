<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <CookieBanner />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CookieBanner from '@/components/CookieBanner.vue'

export default {
  components: {
    Header,
    Footer,
    CookieBanner,
  },
}
</script>

<style></style>
