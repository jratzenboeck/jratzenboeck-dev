<template>
  <div>
    <Header />
    <Intro />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Intro from '@/components/Intro.vue'
export default {
  components: {
    Header,
    Footer,
    Intro,
  },
}
</script>

<style></style>
