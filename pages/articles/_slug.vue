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
  mounted() {
    sync(this.$storybridge)
  },
}
</script>

<style scoped></style>
