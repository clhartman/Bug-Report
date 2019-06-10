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
    note: {},
    notes: [],
  },

  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    setBug(state, data) {
      state.bug = data
    },
    setNotes(state, data) {
      state.notes = data
    },
    setNote(state, data) {
      state.note = data
    },
  },

  actions: {
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('bugs')
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
      commit('setBug', res.data.results)
    },

    async makeNote({ commit, dispatch }, payload) {
      try {
        let res = await _api.post('bugs/' + payload.bug + "/notes", payload)
        dispatch('getNotes', payload.bug)
      } catch (e) { console.error(e) }
    },

    async getNotes({ commit, dispatch }, payload) {
      try {
        let res = await _api.get('bugs/' + payload + "/notes")
        commit('setNotes', res.data.results)
      } catch (e) { console.error(e) }
    },

    async editNote({ commit, dispatch }, payload) {
      try {
        let res = await _api.put('bugs/' + payload.bug + '/notes/' + payload._id, payload)
        console.log(res)
        dispatch('getNotes', payload.bug)
      } catch (e) { console.error(e) }
    },

    async deleteNote({ commit, dispatch }, payload) {
      try {
        let res = await _api.delete('bugs/' + payload.bug + '/notes/' + payload._id, payload)
        console.log(res)
        dispatch('getNotes', payload.bug)
      } catch (e) { console.error(e) }
    },

    async closeBug({ commit, dispatch }, payload) {
      try {
        let res = await _api.delete('bugs/' + payload._id)
        router.push({ name: 'home' })
        console.log(payload)
        dispatch('getBugs')
      } catch (e) { console.error(e) }
    },
  }
})