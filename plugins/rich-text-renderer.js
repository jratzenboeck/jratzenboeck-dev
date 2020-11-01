import Vue from 'vue'
import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer'
import CodeListing from '@/components/CodeListing.vue'

Vue.use(VueRichTextRenderer, {
  resolvers: {
    components: {
      code_listing: CodeListing,
    },
  },
})
