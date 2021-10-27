/**重置message，防止重复点击重复弹出message弹框 以及统一配置弹窗距离顶部的位置*/
import { Message } from 'element-ui'
let messageInstance = null
const resetMessage = options => {
  if (messageInstance) {
    messageInstance.close()
  }
  messageInstance = Message({
    ...options,
    offset: 100
  })
}
;['error', 'success', 'info', 'warning'].forEach(type => {
  resetMessage[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options,
        offset: 100
      }
    }
    options.type = type
    return resetMessage(options)
  }
})
export const message = resetMessage
