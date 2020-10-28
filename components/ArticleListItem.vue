<template>
  <div>
    <ArticleHeader
      :title="article.title"
      :reading-time="article.readingTime"
      :created-at="article.createdAt"
    />
    <p class="my-2">{{ article.intro }}</p>
    <nuxt-link
      :to="article.fullSlug"
      class="inline-block p-2 border border-gray-500 rounded cursor-pointer"
    >
      Read more
    </nuxt-link>
  </div>
</template>

<script>
import ArticleHeader from '@/components/ArticleHeader.vue'
export default {
  components: {
    ArticleHeader,
  },
  props: {
    articleStory: {
      type: Object,
      required: true,
    },
  },
  computed: {
    article() {
      return {
        title: this.articleStory.name,
        readingTime: this.articleStory.content.reading_time,
        createdAt: this.articleStory.created_at,
        intro: this.articleStory.content.intro,
        fullSlug: this.articleStory.full_slug,
      }
    },
  },
}
</script>

<style scoped></style>
