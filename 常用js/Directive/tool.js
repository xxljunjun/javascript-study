/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*} 防抖
 */
export function debounce(func, wait = 500, immediate) {
  let timeout, globalArgs, context, timestamp, result;

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, globalArgs);
        if (!timeout) context = globalArgs = null;
      }
    }
  };

  return function (...args) {
    globalArgs = args;
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

/**
 * 
 * likeDebouce: debounce(function(status) {
      this.like(status)
    }),
    like(status) {
      console.log('status',status)
    }
 */
