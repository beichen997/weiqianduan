/**
 * auth: weilan
 * time: 2017/01/17
 * des: 公共工具类
 */

/**
 * 跨应用路由跳转
 * @param {String} href url地址
 * @param {Object} stateObj 状态参数 可以通过history.state读取
 * @param {String} title 标题 暂时没有用
 */
function routerGo(href = '/', title = null, stateObj = {}) {
  // window.history.pushState 不刷新页面，但是改变页面的url地址
  console.log(stateObj, title, href,'路由系列地址')
  window.history.pushState(stateObj, title, href); 
}

export {
  routerGo // 跨应用路由跳转
}
