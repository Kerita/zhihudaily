function getToday () {
  let d0 = new Date()
  let y = d0.getFullYear()
  let m = d0.getMonth() + 1 // 获取当前月份的日期
  let d = d0.getDate()
  if (m < 10) {
    m = '0' + m
  }
  if (d < 10) {
    d = '0' + d
  }
  let day = y + m + d
  return day
}
function getNextDay (next) {
  let d1 = new Date()
  let d0 = new Date()
  let d = d0.getDate()
  d1.setDate(d + next)
  let yy = d1.getFullYear()
  let mm = d1.getMonth() + 1 // 获取当前月份的日期
  let dd = d1.getDate()
  if (mm < 10) {
    mm = '0' + mm
  }
  if (dd < 10) {
    dd = '0' + dd
  }
  let day = yy + '-' + mm + '-' + dd
  return day
}
export default {
  get: getToday,
  getNext: getNextDay
}
