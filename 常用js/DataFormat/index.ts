
/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time: any, option?: any) {
    if (('' + time).length === 10) {
        time = parseInt(time) * 1000
    } else {
        time = +time
    }
    const d: any = new Date(time)
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 30) {
        return '刚刚'
    } else if (diff < 3600) {
        // less 1 hour
        return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
        return '1天前'
    }
    if (option) {
        return parseTime(time, option)
    } else {
        return (
            d.getMonth() +
            1 +
            '月' +
            d.getDate() +
            '日' +
            d.getHours() +
            '时' +
            d.getMinutes() +
            '分'
        )
    }
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time: any, cFormat: any) {
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string')) {
            if ((/^[0-9]+$/.test(time))) {
                // support "1548221490638"
                time = parseInt(time)
            } else {
                // support safari
                // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
                time = time.replace(new RegExp(/-/gm), '/')
            }
        }

        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj: any = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{([ymdhisa])+}/g, (result: any, key: any) => {
        const value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
        return value.toString().padStart(2, '0')
    })
    return time_str
}


/**
日期增加1天
date: Date类型
**/
export function addOneDay(date: any) {
    let time = date.getTime();
    time += (24 * 3600 * 1000);
    date.setTime(time);
}



/**
转换为指定日期
指定格式：yyyy-MM-dd hh:mm:ss
*/
export function parseDate(strDate: string) {
    if (!strDate)
        return;
    // var date = eval('new Date(' + strDate.replace(/\d+(?=-[^-]+$)/,
    //  function (a) { return parseInt(a, 10) - 1; }).match(/\d+/g) + ')');
    var dStr = strDate;
    var regEx = new RegExp("\\-", "gi");
    dStr = dStr.replace(regEx, "/");
    var date = new Date(Date.parse(dStr));
    return date;
}



/**function-字符串日期转成日期类型
strDate : 字符串日期（yyyy-MM-dd或yyyy/MM/dd）
返回 日期类型对象 new Date()
*/
export function StrDate2Date(strDate: any) {
    if (strDate == null || typeof (strDate) === "undefined" || "" === strDate) {
        return null;
    }

    var str = strDate;            // 日期字符串
    str = str.replace(/-/g, '/');  // 将-替换成/，因为下面这个构造函数只支持/分隔的日期字符串
    var date = new Date(str);     // 构造一个日期型数据，值为传入的字符串
    return date;
}

export function TruncDate(date: any) {
    var d = null;
    if (!!date && date instanceof Date) {
        //d = new Date(new Date(formatCSTDate(date,'yyyy-MM-dd')).getTime() - 8*60*60*1000);
        d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), -8));
    }
    return d;
}

export function transformRequest(data: any) {
    let ret = '';
    for (let it in data) {
        let str = (data[it] === null ? '' : data[it]);
        if (str && typeof str == 'string') {
            str = str.trim();
        }
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(str) + '&';
    }
    return ret;
}


/**
 * 获取上一个月
 *
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
export function getPreMonth(date: any) {
    var arr = date.split('/');
    var year = arr[0];  //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var days: any = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中月的天数
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
    }
    var t2 = year2 + '/' + month2;
    return t2;
}

/**
 * 获取下一个月
 *
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
export function getNextMonth(date: any) {
    var arr = date.split('/');
    var year = arr[0];  //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2];   //获取当前日期的日
    var days: any = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中的月的天数
    var year2 = year;
    var month2: any = parseInt(month) + 1;
    if (month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
    }
    var day2 = day;
    var days2: any = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }
    var t2 = year2 + '/' + month2 + '/' + day2;
    return t2;
}

//时间格式化工具
export function dateFormat(date: any, format?: any,format24?:boolean) {

    if (date === null || typeof (date) === 'undefined' || date === '') {
        return null
    } else if (typeof (date) === 'number' || typeof (date) === 'string') { // 时间要转成obj，否则报错
        date = new Date(date)
    }

    const paddNum = function (num: any) {
        num += ''
        return num.replace(/^(\d)$/, '0$1')
    }

    // 指定格式字符
    const cfg: any = {
        yyyy: date.getFullYear(), // 年 : 4位
        yy: date.getFullYear().toString().substring(2), // 年 : 2位
        M: date.getMonth() + 1, // 月 : 如果1位的时候不补0
        MM: paddNum(date.getMonth() + 1), // 月 : 如果1位的时候补0
        d: date.getDate(), // 日 : 如果1位的时候不补0
        dd: paddNum(date.getDate()), // 日 : 如果1位的时候补0
        hh: date.getHours() > 12 ? paddNum(date.getHours() - 12) : date.getHours(), // 时
        mm: paddNum(date.getMinutes()), // 分
        ss: paddNum(date.getSeconds()), // 秒
        aa: date.getHours() < 12 ? 'am' : 'pm'
    }

  const cfg24: any = {
    yyyy: date.getFullYear(), // 年 : 4位
    yy: date.getFullYear().toString().substring(2), // 年 : 2位
    M: date.getMonth() + 1, // 月 : 如果1位的时候不补0
    MM: paddNum(date.getMonth() + 1), // 月 : 如果1位的时候补0
    d: date.getDate(), // 日 : 如果1位的时候不补0
    dd: paddNum(date.getDate()), // 日 : 如果1位的时候补0
    hh: date.getHours(), // 时
    HH: paddNum(date.getHours() ), // H : 如果1位的时候补0
    mm: paddNum(date.getMinutes()), 
    Mm: paddNum(date.getMinutes()),// 分
    ss: paddNum(date.getSeconds()), // 秒
    SS: paddNum(date.getSeconds())

  }
    format || (format = 'MM/dd/yyyy hh:mm:ss aa')

    return format.replace(/([a-z])(\1)*/ig, function (m: number) {
      if(format24){
        return cfg24[m]
      }else
        return cfg[m]
    })
}

export function fromatDuration(timeStamp: number, duration: number) {
    const seconds = duration / 1000
    let minutes = seconds / 60
    const hours = minutes / 60
    const days = hours / 24
    let str = ''
    if (days >= 1 && days <= 3) {
        str = Math.floor(days) + ' days ago'
    } else if (hours > 1 && hours < 24) {
        str = Math.floor(hours) + ' hours ago'
    } else if (minutes < 60) {
        minutes = minutes > 1 ? minutes : 1
        str = Math.floor(minutes) + ' minutes ago'
    } else {
        str = dateFormat(timeStamp)
    }
    return str
}
const Month = {
    Jan: 'January',
    Feb: 'February',
    Mar: 'March',
    Apr: 'April',
    May: 'May',
    Jun: 'June',
    Jul: 'July',
    Aug: 'August',
    Sep: 'September',
    Oct: 'October',
    Nov: 'November',
    Dec: 'December',
}
const Week = {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday',
}

export default {
    Week,
    Month
}
