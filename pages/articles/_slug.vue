<template>
  <section>
    <Article :blok="story" />
  </section>
</template>

<script>
import Article from '@/components/Article.vue'
export default {
  components: {
    Article,
  },
  async asyncData(context) {
    try {
      const { data } = await context.app.$storyapi.get(
        `cdn/stories/articles/${context.params.slug}`,
        {
          version: 'draft',
        }
      )
      return { story: data.story }
    } catch (e) {
      console.error(e)
    }
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  },
}
</script>

<style scoped></style>
