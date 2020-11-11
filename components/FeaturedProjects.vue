<template>
  <div v-editable="blok" class="max-w-3xl mx-auto p-2">
    <h3 class="text-xl uppercase">{{ blok.title }}</h3>
    <ul>
      <li v-for="(project, index) in blok.projects" :key="index" class="my-4">
        <h4 class="text-lg">
          <a :href="project.link.url" class="underline" target="_blank">{{
            project.title
          }}</a>
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
}
</script>

<style scoped></style>
