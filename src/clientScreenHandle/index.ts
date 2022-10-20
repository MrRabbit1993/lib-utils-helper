/**
 * client screen  methods
 * @author: MrRabbit
 */
/**
 * @description: 宽度
 * @author: MrRabbit
 * @date: 2021-5-22 15:19
 */
export function getClientWidth() {
  let clientWidth = 0
  if (document.body.clientWidth && document.documentElement.clientWidth) {
    clientWidth = document.body.clientWidth < document.documentElement.clientWidth ? document.body.clientWidth : document.documentElement.clientWidth
  } else {
    clientWidth = document.body.clientWidth > document.documentElement.clientWidth ? document.body.clientWidth : document.documentElement.clientWidth
  }
  return clientWidth
}

/**
 * @description: 高度
 * @author: MrRabbit
 * @date: 2021-5-22 15:19
 */
export function getClientHeight() {
  let clientHeight = 0
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight
  }
  return clientHeight
}
