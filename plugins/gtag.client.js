import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: 'UA-42874473-3' },
      bootstrap: localStorage.getItem('gtag'),
    },
    app.router
  )
}
