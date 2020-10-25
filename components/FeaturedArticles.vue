<template>
  <section v-editable="blok" class="max-w-lg mx-auto p-2">
    <h3 class="text-xl">{{ blok.headline }}</h3>
    <ul>
      <li v-for="article in featuredArticles" :key="article.id" class="my-4">
        <h3 class="text-lg">{{ article.name }}</h3>
        <span class="text-sm mr-4">Created at: {{ article.created_at }}</span>
        <span class="text-sm"
          >Reading time: {{ article.content.reading_time }}</span
        >
        <p>{{ contentTeaser(article.content.content) }}</p>
        <button class="my-2 p-2 border border-gray-500 rounded cursor-pointer">
          Read more
        </button>
      </li>
    </ul>
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
  methods: {
    contentTeaser(content) {
      return `${content.substr(0, 100).trim()}...`
    },
  },
}
</script>

<style scoped></style>
