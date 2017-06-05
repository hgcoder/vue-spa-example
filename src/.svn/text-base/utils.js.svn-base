/**
 * @authors huxiao (you@example.org)
 * @date    2017-05-25 11:28:15
 * @version $Id$
 */

import Vue from 'vue'

let vm = new Vue()

// implements Object.assign
// fix `Cannot resolve module 'babel-runtime/core-js/object/assign'`
export function assign (dest, ...srcs) {
  srcs.reverse().forEach(src => {
    for (const k in src) {
      if (src.hasOwnProperty(k)) {
        dest[k] = src[k]
      }
    }
  })
  return dest
}

// detail: https://www.zhihu.com/question/23031215
// about deepCopy: http://jerryzou.com/posts/dive-into-deep-clone-in-javascript/
export function deepClone (obj) {
  let str
  let newobj = obj.constructor === Array ? [] : {}
  if (typeof obj !== 'object') {
    return
  } else if (window.JSON) {
    str = JSON.stringify(obj) // 系列化对象
    newobj = JSON.parse(str) // 还原
  } else {
    for (let i in obj) {
      newobj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return newobj
}

export function delFromArr (val, arr) {
  if (arr && arr.indexOf(val) !== -1) {
    arr.splice(arr.indexOf(val), 1)
  }
}

export function clearArr (...arrs) {
  arrs && arrs.forEach(arr => arr.splice(0, arr.length))
}

/**
 * key: 'val'
 * arr: [{val: 1}, {val: 2}]
 * return [1, 2]
 */
export function getKeyMap (key, arr) {
  return arr.map(i => {
    return i[key]
  })
}

/**
 * key: 'val'
 * arr: [{val: 1}, {val: 2}]
 * return 2
 */
export function getMax (key, arr) {
  let result = arr.reduce((pre, next) => {
    return parseInt(pre[key]) > parseInt(next[key]) ? pre : next
  })

  return result[key]
}

export function arrDelObj (arr, key, val) {
  if (!(arr && key && val)) {
    console.error('arrDelObj error: arr, key or val is undefined')
  }
  return arr.filter(item => {
    return item[key] !== val
  })
}

/**
 * 获取屏幕高度
 */

export function setClient (diyh) {
  var ruleH = null
  if (document.body.clientHeight && (document.body.clientHeight - 400 > 0)) {
    // 高度减去 navmenu
    ruleH = document.body.clientHeight - 110
    if (diyh) {
      ruleH = ruleH - diyh
    }
  } else {
    ruleH = 400
  }
  return ruleH
}

/**
 * 提示信息
 * @String msg     提示的文字内容
 * @String method  提示类型 info | error | success | warning | loading
 */
export function showMsg (msg = '出错了！请重试', method = 'error', time) {
  vm.$Message[method](msg, time)
}

export let loading = {
  start () { vm.$Loading.start() },
  finish () { vm.$Loading.finish() },
  error () { vm.$Loading.error() }
}

/**
 * @param  {function} func        传入函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，调用触发于开始边界而不是结束边界
 * @return {function}             返回客户调用函数
 */
export function debounce (func, wait, immediate) {
  var timeout, args, context, timestamp, result

  var later = function () {
    // 据上一次触发时间间隔
    var last = Date.now() - timestamp

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function () {
    context = this
    args = arguments
    timestamp = Date.now()
    var callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      传入函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始边界上的调用，传入{leading: false}。
 *                                如果想忽略结尾边界上的调用，传入{trailing: false}
 * @return {function}             返回客户调用函数
 */
export function throttle (func, wait, options) {
  var context, args, result
  var timeout = null
  // 上次执行时间点
  var previous = 0
  if (!options) options = {}
  // 延迟执行函数
  var later = function () {
    // 若设定了开始边界不执行选项，上次执行时间始终为0
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }
  return function () {
    var now = Date.now()
    // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
    if (!previous && options.leading === false) previous = now
    // 延迟执行时间间隔
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
    // remaining大于时间窗口wait，表示客户端系统时间被调整过
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout)
      timeout = null
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
      // 如果延迟执行不存在，且没有设定结尾边界不执行选项
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}
// 获取cookie信息
export function getCookie (name) {
  var arr
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  arr = document.cookie.match(reg)
  if (arr) {
    return arr[2]
  } else {
    return ''
  }
}

// 获取登陆地址
export function getLoginUr () {
  let url = location.href
  if (url.indexOf('pre') > -1) {
    url = ''
  } else {
    url = ''
  }
  return url
}
