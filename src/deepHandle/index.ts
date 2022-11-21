import { isPlainObject, isObject } from "../common"

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

/**
 * @desc  深拷贝
 * @param val
 * @returns
 */
// 定义一个深拷贝函数  接收目标target参数
export function deepClone(target:any) :any{
  let result;
  // 如果当前需要深拷贝的是一个对象的话
  if (isObject(target)) {
    // 如果是一个数组的话
    if (Array.isArray(target)) {
      result = []; // 将result赋值为一个数组，并且执行遍历
      for (let i in target) {
        // 递归克隆数组中的每一项
        result.push(deepClone(target[i]))
      }
      // 判断如果当前的值是null的话；直接赋值为null
    } else if (target === null) {
      result = null;
      // 判断如果当前的值是一个RegExp对象的话，直接赋值
    } else if (target.constructor === RegExp) {
      result = target;
    } else {
      // 否则是普通对象，直接for in循环，递归赋值对象的所有值
      result = {};
      for (let i in target) {
        result[i] = deepClone(target[i]);
      }
    }
    // 如果不是对象的话，就是基本数据类型，那么直接赋值
  } else {
    result = target;
  }
  // 返回最终结果
  return result;
}