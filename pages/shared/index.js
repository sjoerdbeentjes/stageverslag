import axios from 'axios'

export async function getHeadingMonths (store) {
  const res = await axios.get('http://stageverslag.dev/api/1.1/tables/log/columns/month?access_token=SnDaRObKlZGUIHrY2eWZG3amDyAjJsRo')
  const monthsObj = JSON.parse(res.data.data.options.options)
  const months = Object.values(monthsObj)
  store.commit('setMonths', months)
}

export async function getHeadingWeeks (store) {
  const res = await axios.get('http://stageverslag.dev/api/1.1/tables/log/columns/week?access_token=SnDaRObKlZGUIHrY2eWZG3amDyAjJsRo')
  const weeksObj = JSON.parse(res.data.data.options.options)
  const weeks = Object.values(weeksObj)
  store.commit('setWeeks', weeks)
}

export async function getLogs (store) {
  const res = await axios.get('http://stageverslag.dev/api/1.1/tables/log/rows?access_token=SnDaRObKlZGUIHrY2eWZG3amDyAjJsRo')
  const logs = res.data.data
  store.commit('setLogs', logs)
}
