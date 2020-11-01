<template>
  <div v-editable="blok" class="max-w-3xl mx-auto p-2">
    <component
      :is="block.component"
      v-for="block in blok.body"
      :key="block._uid"
      :blok="block"
    />
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
