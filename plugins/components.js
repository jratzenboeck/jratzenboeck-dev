import Vue from 'vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'
import Page from '~/components/Page.vue'
import Intro from '~/components/Intro.vue'
import FeaturedArticles from '~/components/FeaturedArticles.vue'
import FullWidthImage from '~/components/FullWidthImage.vue'
import AboutSection from '~/components/AboutSection.vue'

Vue.component('page', Page)
Vue.component('intro', Intro)
Vue.component('article_list', FeaturedArticles)
Vue.component('project_list', FeaturedProjects)
Vue.component('full_width_image', FullWidthImage)
Vue.component('about_section', AboutSection)
