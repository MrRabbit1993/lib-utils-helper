/**
 * date  methods
 * @author: MrRabbit
 */

/**
 * @description: 格式化时间
 * @author: MrRabbit
 * @return {Number}
 * @date: 2021-7-29 10:25
 */
export function formatDate(
  time: Date | number | string,
  format = 'yyyy-mm-dd hh:ii:ss'
) {
  if (!time) return ''
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    //在IE或safari下 需要将 - 转换为 / 否则无法识别，后续可添加，暂时不添加此逻辑
    time = typeof time === 'string' ? parseInt(time) : time
    if (('' + time).length === 10) time = time * 1000
    date = new Date(time)
  }
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  // if (getLastMonth && month === 0) {
  //   month = 12
  //   year--
  // }
  const formatMap = {
    y: year,
    m: month,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }

  const timeStr = format.replace(/(y|m|d|h|i|s|a)+/gi, (result, key: keyof typeof formatMap) => {
    let value:string|number = formatMap[key]
    if (key === 'a') {
      if (value === 0) return '日'
      return ['一', '二', '三', '四', '五', '六'][value - 1]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value.toString() || "0"
  })
  return timeStr
}


/**
 * @description: 格式化数字,三位一个逗号
 * @author: MrRabbit
 * @param { Number } num
 * @return { String }
 */
export function formatThousands(num: number): string {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
