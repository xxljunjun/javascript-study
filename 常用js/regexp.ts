export function regexp(type: string): RegExp {
    var _reg: RegExp = /^\d{1,}$/;
    switch (type) {
        case 'username': // 中英文、空格
            _reg = /^[a-zA-Z\u4e00-\u9fa5\s]{1,20}$/;
            break;
        case 'number': // 数字
            _reg = /^\d{1,}$/;
            break;
        case 'email': //邮箱
            _reg = /^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/;
            break;
        case 'phone': //手机号
            _reg = /(^(0|([2-9]))[0-9]{9}$)|(^1[0-9]{10}$)/;
            break;
        case 'regionPhone': //国际手机号
            _reg = /^[0-9]{5,12}$/;
            break;
        case 'vin': // vin
            _reg = /^[a-zA-Z0-9]+$/;
            break;
        case 'numWord': //至少大小写数字
            _reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/;
            break;
        case 'letterWord': //字母和数字
            _reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
            break;
        case 'sameWord': //连续三个相同的字符
            _reg = /(.)\1{2}/;
            break;
        case 'mileage': //mileage
            _reg = /^\d{1,7}(\.\d{1,2})?$/;
            break;
        case 'chinese': // 中文或全角字符
            _reg = /[^\x00-\xff]/;
        case 'price':
            _reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
        case 'jianumber':
            _reg = /(^[1-9]\d*$)/;
        case 'nickname':
            _reg = /^[\u4e00-\u9fa5A-Za-z]*$/;
        case 'password':
            _reg = /^(\d|[a-zA-Z])*((\d[a-zA-Z])|([a-zA-Z]\d))(\d|[a-zA-Z])*$/;
        default:
            break;
    }
    return _reg;
}

export default regexp;
