const Autel:any =  {
  /**
   *  向主页面传递参数
   * @param {String} message
   * @param {String} key
   */
  emitParentMessage(key:any, message:any) {
    window.parent.postMessage({ [key]: message }, '*')
  },

  /**
   *  向子页面传递参数
   * @param {String} message
   * @param {String} key
   */
  emitChildrenMessage(key:any, message:any, index:any) {
    window.frames[index].postMessage({ [key]: message }, '*')
  },
  /**
   *  监听获取参数
   * @returns {callback}
   */
  onMessage(key:any, callback:any) {
    return new Promise(resolve=> {
      window.addEventListener(
      'message',
      function(e) {
      if (key && e.data[key]) {
      resolve(e.data)
      }
      },
      false
      )
      })
  },
  /**
   *  判断 是否被 ifame 嵌套
   *  true 表示未被嵌套， false 表示已被嵌套
   * @returns {boolean}
   */
  isWithinOrOuter() {
    return window.self === window.top
  },
    /**
   *  获取token
   * @returns {string}
   */
  async getAutelToken() {
    Autel.emitParentMessage('AutelToken', 'created')
    const token = await Autel.onMessage('AutelToken').then((res:any) => {
      return res.AutelToken
    })
    return token
  }
}
export default Autel