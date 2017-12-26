
/**
 * typescript，接口
 * 1.和java,C#接口有一定不同，只要“形似”即可实现接口
 * 
 */

interface PlainInterface {
    name: string,
    age: number
}


//  报错:Variable 'personObj' is used before being assigned
// let personObj1: PlainInterface;
// personObj1.name = 'abc';
// personObj1.age = 123;


// 正确
let personObj12: PlainInterface = {
    name: 'asdf',
    age: 123
}

// 正确，这里的<IPerson》
let personObj13: PlainInterface = <PlainInterface>{
    name: 'aaa',
    age: 123
};
// 这样也可以
personObj3.name = '456'
personObj3.age = 123;

// 函数类型接口
interface FunctionInterface {
    (name: string, age: number): void
}

// 注意函数类型接口，接口返回类型为void，而这里返回了string(number),仍不会报错
var funObj: FunctionInterface;
funObj = function (name, age) {
    return 'asdf'
}

//正确
var funObj2: FunctionInterface = <FunctionInterface>{};
funObj2 = (a, b) => { }


/**
 * 类类型接口：
 * 1.接口描述了类的公共部分(即声明的变量，函数均为public)
 * 2.一个类实现了一个接口时，只对其实例部分进行类型检查(不检查静态属性和方法，如构造函数)
 */
interface ClassInterface {
    name: string,
    age: number
}

class Clock2 implements ClassInterface {
    name: string; 
    public age: number;
    constructor(h: number, m: number) { }
}


/**
 * 复合接口，一个对象可以同时做为函数和对象使用
 */
interface ComplexInterface {
    getName(): string,
    (name: string, age: number): string,
    isValid: boolean
}

let icomplex2: ComplexInterface = <ComplexInterface>function (a, b) {
}
icomplex2.isValid = false;
icomplex2.getName = function () {
    return 'aaa'
}

/**
 * 接口的自动类型转换（C#,JAVA没有)
 */
interface Person5{
    name:string,
    age:number
}

let obj = {
    name:'aaa'
}

let obj2 = <Person5>obj;
obj2.age = 45;