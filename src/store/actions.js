export const increment = ({ commit }) => commit('increment')
export const decrement = ({ commit }) => commit('decrement')

export const incrementIfOdd = ({ commit, state }) => {
  if ((state.count + 1) % 2 === 0) {
    commit('increment')
  }
}

export const incrementAsync = ({ commit }) => {
  setTimeout(() => {
    commit('decrement')
  }, 1000)
}
export const setBreadData = ({ commit, state }, dt) => {
  commit('setBreadDt', dt)
}
export const setListData = ({ commit, state }, dt) => {
  commit('setListData', dt)
}
