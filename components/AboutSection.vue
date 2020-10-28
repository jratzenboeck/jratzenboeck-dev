<template>
  <section>
    <article class="my-4 prose lg:prose-lg">
      <rich-text-renderer :document="blok.content.content" />
    </article>
  </section>
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
