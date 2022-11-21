const toString = Object.prototype.toString

/**
 * @desc  是否是日期类型
 * @param val
 * @returns
 */
export const isDate: (val: any) => val is Date = (val: any): val is Date => {
  return toString.call(val) === '[object Date]'
}

/**
 * @desc  是否是对象
 * @param val
 * @returns
 */
export const isObject: (val: any) => val is Object = (val: any): val is Object => {
  return val !== null && typeof val === 'object'
}

/**
 * @desc  是否是普通对象,非formData blob 等之类
 * @param val
 * @returns
 */
export const isPlainObject: (val: any) => val is Object = (val: any): val is Object => {
  return toString.call(val) === '[object Object]'
}