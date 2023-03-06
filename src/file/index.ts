/**
 * @desc  获取文件后缀
 * @param { string} fileName
 * @returns { RegExpMatchArray }
 */
export function getFileSuffix(fileName: string) {
  const suffixReg = /\.([0-9a-z]+)(?:[\?#]|$)/i;
  if(!fileName) return
  return fileName.match(suffixReg);
}
