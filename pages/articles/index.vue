<template>
  <section class="max-w-3xl mx-auto p-2">
    <h1 class="text-4xl my-4">Articles</h1>
    <ul v-if="stories">
      <li v-for="story in stories" :key="story.id" class="my-8">
        <ArticleListItem :article-story="story" />
      </li>
    </ul>
    <p v-else>No articles found</p>
  </section>
</template>

<script>
import ArticleListItem from '@/components/ArticleListItem.vue'
export default {
  components: {
    ArticleListItem,
  },
  async asyncData(context) {
    try {
      const response = await context.app.$storyapi.get('cdn/stories', {
        version: 'draft',
        starts_with: 'articles/',
      })
      return response.data
    } catch (e) {
      //
    }
  },
  data() {
    return {
      stories: [],
    }
  },
}
</script>
