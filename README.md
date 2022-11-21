# 常用工具函数库 lib-utils-helper

## 1、通用相关函数

| 方法名称  | 说明     | 参数说明             |返回值|
| :-------- | :------- | :----------------------- |:---|
| isDate | 是否是日期类型 | - |boolean|
| isObject    | 是否是对象 | - |boolean|
| isPlainObject    | 是否是普通对象,非formData blob 等之类 | - |boolean|
## 2、窗口相关函数

| 方法名称  | 说明     | 参数说明             |返回值|
| :-------- | :------- | :----------------------- |:---|
| getClientWidth | 获取客户端宽度 | - |number|
| getClientHeight    | 获取客户端高度 | - |number|


## 3、className相关函数

| 方法名称  | 说明     | 参数说明     |返回值|
| :-------- | :------- | :--------------------------- |:---|
| hasClassName | 判断dom是否包含className | (el: HTMLElement,className:string) |boolean|
| addClassName    | 添加className | (el: HTMLElement, className: string) |boolean|


## 4、日期相关函数

| 方法名称  | 说明     | 参数说明     |返回值|
| :-------- | :------- | :--------------------------- |:---|
| formatDate | 格式化时间 | (time: Date \| number \| string, format?: string, getLastMonth?: boolean) |string|

## 5、url相关函数

| 方法名称  | 说明     | 参数说明     |返回值|
| :-------- | :------- | :--------------------------- |:---|
| getQueryString |根据浏览器url获取指定参数 | name:string |string|
| urlParsingNode |解析域名相关信息 | url |{protocol: string;host: string}|
| isAbsoluteURL |是否绝对地址 | url |boolean|

## 6、DeepHandle

| 方法名称  | 说明     | 参数说明     |返回值|
| :-------- | :------- | :--------------------------- |:---|
| deepMerge |深度对象合并 |obj:any[] |any|
| deepClone |深拷贝 |obj:an |any|
## extractData 数据提取

| 方法名称  | 说明     | 参数说明     |返回值|
| :-------- | :------- | :--------------------------- |:---|
| extractData |深度对象合并 |(list:Array<{[key]:string}>,keyMaps:T) |Array|

## 7、guid

| 方法名称  | 说明     | 参数说明     |返回值|
| :-------- | :------- | :--------------------------- |:---|
| guid |全局唯一标识符 |(len = 32, firstU = true, radix = 16) |string|