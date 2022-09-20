/**
 * @description 判断dom是否包含className
 * @author MrRabbit
 * @date 2020-05-15
 * @param {string} style    ：transform
 */
let elementStyle = document.createElement("div").style;
type transformNamesType = {
  webkit: string;
  Moz: string;
  O: string;
  ms: string;
  standard: string;
};
let vendor = (() => {
  let transformNames: transformNamesType = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform",
    standard: "transform"
  };

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
})();

export function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }

  if (vendor === "standard") {
    return style;
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
