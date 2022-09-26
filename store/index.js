const getSettings = () =>
  import('~/_data/settings.json').then((m) => m.default || m)

export const state = () => ({
  settings: [],
})

export const mutations = {
  setSettings: (state, list) => (state.settings = list),
}

export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    const settings = await getSettings()
    await commit('setSettings', settings)
  },
}
