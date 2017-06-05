export const count = state => state.count

const limit = 5

export const recentHistory = state => {
  const end = state.history.length
  const begin = end - limit < 0 ? 0 : end - limit
  return state.history
    .slice(begin, end)
    .toString()
    .replace(/,/g, ', ')
}
export const table1Data = state => {
  return state.table1Data
}
export const table2Data = state => {
  return state.table2Data
}
export const navData = state => {
  return state.navData.list
}
export const breadCruData = state => {
  return state.navData.name
}
export const chartsLine = state => {
  return state.chartsLine
}
export const chartsClo = state => {
  return state.chartsClo
}
export const chartsPie = state => {
  return state.chartsPie
}
// export const dragDt = state => {
//   return state.dragDt
// }
