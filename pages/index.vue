<template>
  <section>
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </section>
</template>

<script>
import { get, sync } from '@/services/api'
export default {
  async asyncData(context) {
    try {
      return await get(context, '/home')
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
  mounted() {
    sync(this.$storybridge)
  },
}
</script>

<style></style>
