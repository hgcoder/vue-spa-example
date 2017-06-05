// state 操作方法
export const setBreadDt = (state, dt) => {
  state.navData.name = dt.d
}
export const setListData = (state, dt) => {
  state.table2Data = dt.d
}
export const updateList = (state, dt) => {
  state.dragDt = dt
}
