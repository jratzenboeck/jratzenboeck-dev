export const state = () => ({
  articles: [],
})

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
}
