import Vue from 'vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'
import Page from '~/components/Page.vue'
import Intro from '~/components/Intro.vue'
import FeaturedArticles from '~/components/FeaturedArticles.vue'

Vue.component('page', Page)
Vue.component('intro', Intro)
Vue.component('article_list', FeaturedArticles)
Vue.component('project_list', FeaturedProjects)
