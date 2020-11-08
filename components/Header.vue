<template>
  <div class="text-center p-4 bg-gray-200 shadow-md">
    <nuxt-link to="/"
      ><img
        src="@/assets/img/logo.png"
        alt="Logo"
        class="w-16 h-auto inline-block"
    /></nuxt-link>
    <nav>
      <ul>
        <li class="inline-block mr-4 relative">
          <nuxt-link
            to="/articles"
            :class="[
              'hover:border-b-2',
              'hover:border-black',
              'pb-1',
              currentRoute === '/articles' ? 'border-b-2 border-black' : '',
            ]"
            >Articles</nuxt-link
          >
        </li>
        <li class="inline-block">
          <nuxt-link
            to="/about"
            :class="[
              'hover:border-b-2',
              'hover:border-black',
              'pb-1',
              currentRoute === '/about' ? 'border-b-2 border-black' : '',
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
