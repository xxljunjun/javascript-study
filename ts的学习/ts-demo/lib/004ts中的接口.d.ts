interface Config {
    type: string;
    url: string;
    data?: string;
    dataType: string;
}
declare function ajax(config: Config): void;
interface encrypt {
    (key: string, value: string): string;
}
declare var md5: encrypt;
interface Uerarr {
    [index: number]: string;
}
declare var arr: Uerarr;
interface leilei {
    name: string;
    eat(str: string): void;
}
declare class Dog1 implements leilei {
    name: string;
    constructor(name: string);
    eat(): void;
}
interface leilei {
    name: string;
    eat(str: string): void;
}
interface xxl extends leilei {
    work(): void;
}
declare class Dog implements xxl {
    name: string;
    constructor(name: string);
    eat(): void;
    work(): void;
}
declare class Person {
    name: string;
    constructor(name: string);
    coding(): void;
}
declare class man extends Person implements xxl {
    constructor(name: string);
    eat(): void;
    work(): void;
}
