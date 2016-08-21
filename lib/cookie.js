function getCookie (name) {
  let arr = null
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  arr = document.cookie.match(reg)
  if (arr) return unescape(arr[2])
  else return null
}
function delCookie (name) {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  let cval = getCookie(name)
  if (cval != null) document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
}
function setCookie (name, value, time) {
  let strsec = getsec(time)
  let exp = new Date()
  exp.setTime(exp.getTime() + strsec * 1)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}

function getsec (str) {
  let str1 = str.substring(1, str.length) * 1
  let str2 = str.substring(0, 1)
  if (str2 === 's') {
    return str1 * 1000
  } else if (str2 === 'h') {
    return str1 * 60 * 60 * 1000
  } else if (str2 === 'd') {
    return str1 * 24 * 60 * 60 * 1000
  }
}
export default {
  get: getCookie,
  del: delCookie,
  set: setCookie
}
