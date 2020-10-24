<template>
  <section>
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </section>
</template>

<script>
export default {
  async asyncData(context) {
    try {
      const response = await context.app.$storyapi.get('cdn/stories/home', {
        version: 'draft',
      })
      return response.data
    } catch (e) {
      console.error(e)
    }
  },
  data() {
    return {
      story: { content: {} },
    }
  },
}
</script>

<style></style>
