/**
 * @authors huxiao (you@example.org)
 * @date    2017-05-25 11:14:25
 * @version $Id$
 */

import axios from 'axios'
import {showMsg, loading} from '../utils'

if (!window.URLSearchParams) {
  window.URLSearchParams = require('url-search-params')
}

export function get (url, params, suc) {
  loading.start()
  axios.get(url, {params: params})
    .then(response => {
      handleSuccess(response, suc)
    })
    .catch(error => {
      handleError(error)
    })
}

export function post (url, params, suc) {
  loading.start()
  axios.post(url, genQueryString(params))
    .then(response => {
      handleSuccess(response, suc)
    })
    .catch(error => {
      handleError(error)
    })
}

export function postFile (url, $form, suc) {
  axios.post(url, {d: $form}, {
    method: 'post',
    headers: {'Content-Type': 'application/json'}
  }).then((response, suc) => {
    handleSuccess(response, suc)
  })
  .catch(error => {
    handleError(error)
  })
}

function handleSuccess (response, suc) {
  loading.finish()
  if (response.data.retCode !== '200000') {
    showMsg(response.data.retDesc)
  } else {
    suc(response.data)
  }
}

function handleError (error) {
  loading.error()
  console.log(error)
  showMsg()
}

function genQueryString (params) {
  var urlSearchParams = new URLSearchParams()
  for (let key in params) {
    urlSearchParams.append(key, params[key])
  }
  return urlSearchParams
}

axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
