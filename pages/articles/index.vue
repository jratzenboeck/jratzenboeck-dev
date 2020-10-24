<template>
  <section class="max-w-lg mx-auto p-2">
    <ul>
      <li v-for="story in stories" :key="story.id">
        <h3 class="text-lg">{{ story.name }}</h3>
        <span class="text-sm mr-4">Created at: {{ story.created_at }}</span>
        <span class="text-sm"
          >Reading time: {{ story.content.reading_time }}</span
        >
        <p>{{ story.content.content }}</p>
        <button>Read more</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData(context) {
    try {
      const response = await context.app.$storyapi.get('cdn/stories', {
        version: 'draft',
        starts_with: 'articles/',
      })
      return response.data
    } catch (e) {
      console.error(e)
    }
  },
  data() {
    return {
      stories: [],
    }
  },
}
</script>
