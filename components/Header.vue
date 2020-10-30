<template>
  <div class="text-center p-4 bg-light text-white">
    <h2 class="text-2xl">
      <nuxt-link to="/">jratzenboeck</nuxt-link>
    </h2>
    <nav>
      <ul>
        <li class="inline-block mr-4 relative">
          <nuxt-link
            to="/articles"
            :class="[
              'hover:border-b-2',
              'hover:border-white',
              'pb-1',
              currentRoute === '/articles' ? 'border-b-2' : '',
            ]"
            >Articles</nuxt-link
          >
        </li>
        <li class="inline-block">
          <nuxt-link
            to="/about"
            :class="[
              'hover:border-b-2',
              'hover:border-white',
              'pb-1',
              currentRoute === '/about' ? 'border-b-2' : '',
            ]"
            >About</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.path
    },
  },
}
</script>

<style scoped></style>
