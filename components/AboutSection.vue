<template>
  <article class="my-4">
    <p
      v-for="(paragraph, index) in blok.content.content"
      :key="index"
      class="my-2"
    >
      <span v-html="paragraph.content[0].text"></span>
    </p>
  </article>
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
