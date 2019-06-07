import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'

const _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/CourtneyTest'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    bug: {},
  },

  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    setBug(state, data) {
      state.bug = data
    },
  },

  actions: {
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('bugs')
        console.log(res)
        commit('setBugs', res.data.results)
      } catch (e) { console.error(e) }
    },
    async makeBug({ commit, dispatch }, payload) {
      try {
        let res = await _api.post('bugs', payload)
        dispatch('getBugs')
      } catch (e) { console.error(e) }
    },

    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get('bugs/' + id)
      console.log(res)
      commit('setBug', res.data.results)
    },
  }
})

// async getGameById({ commit, dispatch }, id) {
//   let res = await _api.get('games/' + id)
//   commit('setGame', res.data)
