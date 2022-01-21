(function () {
  (function () {
    /* 一、用数据类型对函数输入和输出进行约束*/
    function sum(x: number, y: number): number {
      return x + y;
    }
    let mySum: (x: number, y: number) => number = function (
      x: number,
      y: number
    ): number {
      return x + y;
    };

    /*二、用接口的方式来定义一个函数需要符合的形状*/
    interface SearchFunc {
      (source: string, subString: string): boolean;
    }
    let mySearch: SearchFunc;
    mySearch = function (source: string, subString: string) {
      return source.search(subString) !== -1;
    };

    /* 三、可选参数?*/ //可选参数后面不允许再出现必需参数了
    // function buildName(firstName: string, lastName?: string) {
    // 	if (lastName) {
    // 		return firstName + ' ' + lastName
    // 	} else {
    // 		return firstName
    // 	}
    // }
    // let tomcat = buildName('Tom', 'Cat')
    // let tom = buildName('Tom')

    /* 四、参数默认值*/ //TypeScript会将添加了默认值的参数识别为可选参数：此时就不受「可选参数必须接在必需参数后面」的限制了
    function buildName(firstName: string, lastName: string = "Cat") {
      return firstName + " " + lastName;
    }
    let tomcat = buildName("Tom", "Cat");
    let tom = buildName("Tom");

    /* 五、剩余参数 */ //ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数） //rest 参数只能是最后一个参数，关于 rest 参数，可以参考 [ES6 中的 rest 参数][]。
    function push(array: any[], ...items: any[]) {
      items.forEach(function (item) {
        array.push(item);
      });
    }

    let a = [];
    push(a, 1, 2, 3);

    /* 六、重载 */ //重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
    // function reverse(x: number | string): number | string {
    // 	if (typeof x === 'number') {
    // 		return Number(x.toString().split('').reverse().join(''))
    // 	} else if (typeof x === 'string') {
    // 		return x.split('').reverse().join('')
    // 	}
    // }

    function reverse(x: number): number; //前几次都是函数定义，最后一次是函数实现
    function reverse(x: string): string;
    function reverse(x: number | string): number | string {
      if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
      } else if (typeof x === "string") {
        return x.split("").reverse().join("");
      }
    }
  })();
})();
