<template>
  <div>
    <h4 class="text-4xl my-1">{{ title }}</h4>

    <div class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="w-4 h-4 inline-block"
      >
        <path
          d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
        />
      </svg>
      <span class="text-sm ml-2 mr-4">{{ articleCreatedAt }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="w-4 h-4 inline-block"
      >
        <path
          d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"
        />
      </svg>
      <span class="text-sm ml-2">Reading time: {{ readingTime }}</span>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    readingTime: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
  },
  computed: {
    articleCreatedAt() {
      const dateParts = this.createdAt.split(/[^0-9]/)
      const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
      return format(date, 'dd.MM.yyyy')
    },
  },
}
</script>

<style scoped></style>
