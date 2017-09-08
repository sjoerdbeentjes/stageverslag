import axios from 'axios'

export const state = () => {
  return {
    headings: {
      weeks: [],
      months: []
    },

    logs: []
  }
}

export const getters = {
  filterLogs: (state) => {
    return state.logs.filter(log => {
      return log.week === state.route.params.week && log.month === state.route.params.month
    })
  }
}

export const mutations = {
  setMonths (state, months) {
    state.headings.months = months
  },

  setWeeks (state, weeks) {
    state.headings.weeks = weeks
  },

  setLogs (state, logs) {
    if (!state.logs.length) state.logs = logs
  },

  addLog (state, log) {
    state.logs = [log, ...state.logs]
  }
}

export const actions = {
  async addPost ({commit}, formData) {
    console.log(formData)
    const res = await axios.post('http://stageverslag.dev/api/1.1/tables/log/rows?access_token=SnDaRObKlZGUIHrY2eWZG3amDyAjJsRo', formData)
    commit('addLog', res.data.data)
  }
}
