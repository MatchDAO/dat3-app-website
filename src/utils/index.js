/*
 * @Author: WangHao
 * @Date: 2023-01-09 21:41:14
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-13 13:40:43
 * @Description: 请添加当前文件描述
 */
export default {
  isObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  },
  isMobile() {
    return window.navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
  }
}