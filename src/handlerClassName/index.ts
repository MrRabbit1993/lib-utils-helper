/**
 * @description 判断dom是否包含className
 * @author MrRabbit
 * @date 2020-05-15
 * @param 元素 el    ：div
 * @param { string } className    ：wrapper
 */
export function hasClassName(el: HTMLElement, className: string): boolean {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

/**
 * @description 添加className
 * @author MrRabbit
 * @date 2020-05-15
 * @param 元素 el    ：div
 * @param { string } className    ：wrapper
 */
export function addClassName(el: HTMLElement, className: string): void {
  if (hasClassName(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}
