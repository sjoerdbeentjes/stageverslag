import axios from 'axios'

export const state = () => {
  return {
    headings: {
      weeks: [],
      months: []
    },

    logs: [],

    selectedWeek: '',

    selectedMonth: ''
  }
}

export const getters = {
  filterLogs: (state) => {
    return state.logs.filter(log => {
      return state.selectedWeek && log.week === state.selectedWeek.toLowerCase().replace(' ', '') && log.month === state.selectedMonth
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
    state.logs = logs
  },

  setSelectedMonth (state, month) {
    state.selectedMonth = month
  },

  setSelectedWeek (state, week) {
    state.selectedWeek = week
  },

  addLog (state, log) {
    state.logs = [...state.logs, log]
  }
}

export const actions = {
  async getHeadingMonths ({commit}) {
    const res = await axios.get('http://stageverslag.dev/api/1.1/tables/log/columns/month?access_token=SnDaRObKlZGUIHrY2eWZG3amDyAjJsRo')
    const monthsObj = JSON.parse(res.data.data.options.options)
    const months = Object.values(monthsObj)
    commit('setMonths', months)
  },

  async getHeadingWeeks ({commit}) {
    const res = await axios.get('http://stageverslag.dev/api/1.1/tables/log/columns/week?access_token=SnDaRObKlZGUIHrY2eWZG3amDyAjJsRo')
    const weeksObj = JSON.parse(res.data.data.options.options)
    const weeks = Object.values(weeksObj)
    commit('setWeeks', weeks)
  },

  async getLogs ({commit}) {
    const res = await axios.get('http://stageverslag.dev/api/1.1/tables/log/rows?access_token=SnDaRObKlZGUIHrY2eWZG3amDyAjJsRo')
    const logs = res.data.data
    commit('setLogs', logs)
  },

  setSelectedWeek ({commit}, week) {
    commit('setSelectedWeek', week)
  },

  setSelectedMonth ({commit}, month) {
    commit('setSelectedMonth', month)
  },

  async addPost ({commit}, formData) {
    const res = await axios.post('http://stageverslag.dev/api/1.1/tables/log/rows?access_token=SnDaRObKlZGUIHrY2eWZG3amDyAjJsRo', formData)
    commit('addLog', res.data.data)
  }
}
