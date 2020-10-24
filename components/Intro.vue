<template>
  <div class="p-3 max-w-lg mx-auto text-center">
    <h1 class="text-4xl my-3">{{ blok.headline }}</h1>
    <img
      :src="blok.profilePicture.filename"
      alt="Profile picture"
      class="block h-32 w-32 rounded-full mx-auto"
    />
    <p class="my-3">{{ blok.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
