<template>
  <section v-editable="blok" class="max-w-3xl mx-auto p-2">
    <h3 class="text-xl">{{ blok.headline }}</h3>
    <ul>
      <li v-for="story in featuredArticles" :key="story.id" class="my-4">
        <ArticleListItem :article-story="story" />
      </li>
    </ul>
  </section>
</template>

<script>
import ArticleListItem from '@/components/ArticleListItem.vue'
export default {
  components: {
    ArticleListItem,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  async fetch() {
    try {
      const { data } = await this.$storyapi.get('cdn/stories', {
        version: 'draft',
        by_uuids: this.blok.articles.join(','),
      })
      this.featuredArticles = data.stories
    } catch (e) {
      console.error(e)
    }
  },
  data() {
    return {
      featuredArticles: [],
    }
  },
}
</script>

<style scoped></style>
