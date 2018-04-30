import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)
export default new vuex.Store({
  state: {
    articleTitle: '',
  },
  getters: {
    getArticleTitle (state) {
      return state.articleTitle
    },
  },
  mutations: {
    updateArticle (state, message) {
      state.articleTitle = message;
    },
  },
  actions: {
    updateArticle (context, msgName) {
      context.commit('updateArticle',msgName);
    },
  }
})
