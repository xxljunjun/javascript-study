/**
 * 节流对象：节流的策略是固定周期内，只执行一次动作，若有新事件触发，不执行，
 * 周期结束后，又有事件触发，开始新的周期
 */
export default {
    bind(el:any, binding:any, vnode:any) {
        _handleParams(el, binding)
        el.removeEventListener("click", () => { })
        el.addEventListener('click', (e:any) => {
            if (binding.modifiers.stop) e.stopPropagation();//阻止事件冒泡
            if (binding.modifiers.prev) e.preventDefault();//取消默认行为
            const nowTime = new Date().getTime();
            if (!el.preTime || nowTime - el.preTime > 1000) {
                el.preTime = nowTime;
                if (el.callbackParams&&el.callbackParams.length > 0) {
                    el.callback(...el.callbackParams)
                } else {
                    el.callback()
                }
            }
        })
    },
    update(el:any, binding:any) {
        _handleParams(el, binding)
    },
    unbind(el:any) {
        el.removeEventListener("click", () => { })
    }
}

function _handleParams(el:any, binding:any) {
    el.callbackParams = [];
    if (Array.isArray(binding.value)) {
        if (typeof binding.value[0] == "function") {
            el.callback = binding.value[0]
        }
        if (binding.value.length > 1) {
            el.callbackParams = binding.value.slice(1)
        }
    } else if (typeof binding.value == "function") {
        el.callback = binding.value;
    }
}