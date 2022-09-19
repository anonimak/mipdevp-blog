export const state = () => ({
  settings: [],
})

export const mutations = {
  setSettings: (state, list) => (state.settings = list),
}

export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    const settings = await $content('settings').fetch()
    await commit('setSettings', settings)
  },
}
