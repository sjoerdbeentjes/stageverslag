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
    state.logs = [...state.logs, log]
  },

  updateLog (state, updatedLog) {
    state.logs = state.logs.map(log => updatedLog.id === log.id ? updatedLog : log)
  },

  removeLog (state, id) {
    state.logs = state.logs.filter(log => log.id !== id)
  }
}

export const actions = {
  async addPost ({commit}, formData) {
    const res = await axios.post('http://stageverslag.dev/api/1.1/tables/log/rows?access_token=SnDaRObKlZGUIHrY2eWZG3amDyAjJsRo', formData)
    commit('addLog', res.data.data)
  },

  async updatePost ({commit}, formData) {
    const res = await axios.put(`http://stageverslag.dev/api/1.1/tables/log/rows/${formData.id}?access_token=SnDaRObKlZGUIHrY2eWZG3amDyAjJsRo`, formData)
    commit('updateLog', res.data.data)
  },

  async removePost ({commit}, id) {
    await axios.delete(`http://stageverslag.dev/api/1.1/tables/log/rows/${id}?access_token=SnDaRObKlZGUIHrY2eWZG3amDyAjJsRo`)
    commit('removeLog', id)
  }
}
