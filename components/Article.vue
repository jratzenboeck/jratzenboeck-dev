<template>
  <div v-editable="blok" class="max-w-3xl p-2 mt-4 mx-auto">
    <ArticleHeader
      :title="blok.name"
      :reading-time="blok.content.reading_time"
      :created-at="blok.content.published || blok.created_at"
    />
    <article class="prose lg:prose-lg">
      <rich-text-renderer :document="blok.content.full_text" />
    </article>
  </div>
</template>

<script>
import ArticleHeader from '@/components/ArticleHeader.vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

export default {
  components: {
    ArticleHeader,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    hljs.initHighlighting()
  },
}
</script>

<style scoped></style>
