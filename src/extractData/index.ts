/**
 * @description: 数据提取
 * @author: MrRabbit
 * @param { Array<{[key]:string}> } list 数据列表
 * @param { Object } keyMaps 字段映射类型
 * @return { Array } 提取字段集合
 */
const extractDataData = <T extends ReadonlyArray<any>, K extends keyof T[number], KM = { readonly [k in K]: string }>(
  list: T,
  keyMaps: KM
) => {
  const newKey = Object.keys(keyMaps) as (keyof KM)[]
  return list.map((item) => {
    return newKey.reduce(
      (_item, k) => {
        if (item.hasOwnProperty(k)) {
          _item[keyMaps[k] as any] = item[k]
        }
        return _item
      },
      {} as {
        [k in K as Extract<KM[k], string>]: T[number][k]
      }
    )
  })
}

export { extractDataData }
