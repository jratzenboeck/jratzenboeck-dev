<template>
  <section>
    <Article :blok="story" />
  </section>
</template>

<script>
import { get, sync } from '@/services/api'
import Article from '@/components/Article.vue'
export default {
  components: {
    Article,
  },
  async asyncData(context) {
    try {
      return await get(context, `/articles/${context.params.slug}`)
    } catch (e) {
      if (e.response.status === 404) {
        context.error({
          statusCode: 404,
          message: 'Article does not exist.',
        })
      } else {
        context.error({
          statusCode: e.response.status,
          message: 'Oops something went wrong.',
        })
      }
    }
  },
  computed: {
    metaDescription() {
      return `${this.story.content.intro.substr(0, 150)} ...`
    },
  },
  mounted() {
    sync(this.$storybridge, this.story)
  },
  head() {
    return {
      title: this.story.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription,
        },
      ],
    }
  },
}
</script>

<style scoped></style>
