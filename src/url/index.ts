/**
 * @desc 根据浏览器url获取指定参数
 * @param { string } name
 * @returns { string | null }
 */
export function getQueryString(name: string) {
  const reg = new RegExp('(^|&|\\?)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.href.match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

/**
 * @desc  解析域名相关信息
 * @param url
 * @returns
 */
interface URLORigin {
  protocol: string,
  host: string
}
const urlParsingNode = document.createElement("a")
export const resolveURL: (url: string) => URLORigin = (url) => {
  urlParsingNode.setAttribute('href', url)
  const { protocol, host } = urlParsingNode
  return { protocol, host }
}

/**
 * @desc  是否绝对地址
 * @param url
 * @returns
 */
export const isAbsoluteURL: (url: string) => boolean = (url) => {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
}