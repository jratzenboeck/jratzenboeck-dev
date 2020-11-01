<template>
  <div v-editable="blok" class="max-w-3xl mx-auto p-2">
    <h3 class="text-xl uppercase">{{ blok.title }}</h3>
    <ul>
      <li v-for="project in featuredProjects" :key="project.id" class="my-4">
        <h4 class="text-lg">
          <a :href="project.link" class="underline">{{ project.title }}</a>
        </h4>
        <p class="my-2">{{ project.description }}</p>
      </li>
    </ul>
  </div>
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
        by_uuids: this.blok.projects.join(','),
      })
      this.featuredProjects = data.stories.map((story) => story.content)
    } catch (e) {
      //
    }
  },
  data() {
    return {
      featuredProjects: [],
    }
  },
}
</script>

<style scoped></style>
