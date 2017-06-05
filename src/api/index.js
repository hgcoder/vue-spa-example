/**
 * @authors huxiao (you@example.org)
 * @date    2017-05-25 11:13:37
 * @version $Id$
 */
import {get} from './fetch.js'
export function tReq (param = {}, suc) {
  get('../static/data/mjson.json', param, res => {
    suc(res)
  })
  // post('../static/data/mjson.json', param, res => {
  //   suc(res)
  // })
}

export function table2Reducer (param, suc) {
  get('../static/data/mjson.json', param, res => {
    suc(res)
  })
}
