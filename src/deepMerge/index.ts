import { isPlainObject } from "./../common"

/**
 * @desc  深度对象合并
 * @param val
 * @returns
 */
export const deepMerge: (...objs: any[]) => any = (...objs) => {// 深拷贝
  const result = Object.create(null)
  objs.forEach(obj => {
    if (obj) {// obj是any 所以需要判断
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (isPlainObject(val)) {// 值是对象 直接递归
          result[key] = isPlainObject(result[key]) ? deepMerge(result[key], val) : deepMerge(val)// 如果值的对象里面有起始的key，则将key与其实key合并
        } else {
          result[key] = val
        }
      })
    }
  })
  return result
}