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
import { get } from '@/services/api'
import ArticleListItem from '@/components/ArticleListItem.vue'
export default {
  components: {
    ArticleListItem,
  },
  async asyncData(context) {
    try {
      return await get(context, '', { starts_with: 'articles/' })
    } catch (e) {
      if (e.response.status === 404) {
        context.error({
          statusCode: 404,
          message: 'Page does not exist.',
        })
      } else {
        context.error({
          statusCode: e.response.status,
          message: 'Oops something went wrong.',
        })
      }
    }
  },
  head() {
    return {
      title: 'Articles',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Latest articles on creating high-quality Software, usage of modern web technologies to enable great developer experience and best practices to enhance your daily life as a software developer.',
        },
      ],
    }
  },
}
</script>
