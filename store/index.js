export const state = () => {
  return {
    logs: []
  }
}

export const getters = {
  logs: state => state.logs,
  filterLogs: (state) => {
    return state.logs;
  }
}

export const mutations = {
  setLogs(state, logs) {
    state.logs = logs;
  }
}

export const actions = {
  setLogs({ commit }, logs) {
    commit('setLogs', logs);
  }
}
