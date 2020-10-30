<template>
  <h1 class="text-4xl text-center my-4">{{ blok.headline }}</h1>
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
