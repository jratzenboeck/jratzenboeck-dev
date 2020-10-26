<template>
  <img :src="blok.image.filename" class="w-full" />
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
