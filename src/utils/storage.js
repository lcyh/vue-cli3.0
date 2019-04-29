import _ from 'lodash'

export default class Util {
  static storage (key, value) {
    if (_.isString(key)) {
      if (_.isUndefined(value)) {
        return JSON.parse(sessionStorage.getItem(key))
      } else if (_.isNull(value)) {
        sessionStorage.removeItem(key)
      } else {
        sessionStorage.setItem(key, JSON.stringify(value))
      }
    } else if (_.isPlainObject(key)) {
      _.forEach(key, (k, v) => {
        Util.storage(k, v)
      })
    }
  }
}
