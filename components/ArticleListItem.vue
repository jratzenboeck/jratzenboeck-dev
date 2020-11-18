<template>
  <div>
    <ArticleHeader
      :title="article.title"
      :reading-time="article.readingTime"
      :published-at="article.publishedAtOverwritten || article.publishedAt"
    />
    <p class="my-2">{{ article.intro }}</p>
    <nuxt-link
      :to="article.fullSlug"
      class="inline-block py-3 px-5 border text-white rounded-full cursor-pointer bg-gradient-to-r from-light to-dark hover:bg-light hover:bg-none"
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
        publishedAt: this.articleStory.published_at || new Date().toISOString(),
        intro: this.articleStory.content.intro,
        fullSlug: this.articleStory.full_slug,
        publishedAtOverwritten: this.articleStory.content.published,
      }
    },
  },
}
</script>

<style scoped></style>
