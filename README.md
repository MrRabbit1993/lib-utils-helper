# 常用工具函数库 lib-utils-helper

## 1、窗口相关函数

| 方法名称  | 说明     | 参数说明             |返回值|
| :-------- | :------- | :----------------------- |:---|
| getClientWidth | 获取客户端宽度 | - |number|
| getClientHeight    | 获取客户端高度 | - |number|


## 2、className相关函数

| 方法名称  | 说明     | 参数说明     |返回值|
| :-------- | :------- | :--------------------------- |:---|
| hasClassName | 判断dom是否包含className | (el: HTMLElement,className:string) |boolean|
| addClassName    | 添加className | (el: HTMLElement, className: string) |boolean|


## 3、日期相关函数

| 方法名称  | 说明     | 参数说明     |返回值|
| :-------- | :------- | :--------------------------- |:---|
| formatDate | 格式化时间 | (time: Date \| number \| string, format?: string, getLastMonth?: boolean) |string|