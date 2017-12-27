"use strict";
/**
 * typescript，接口
 * 1.和java,C#接口有一定不同，只要“形似”即可实现接口
 *
 */
//  报错:Variable 'personObj' is used before being assigned
// let personObj1: PlainInterface;
// personObj1.name = 'abc';
// personObj1.age = 123;
// 正确
let personObj12 = {
    name: 'asdf',
    age: 123
};
// 正确，这里的<IPerson》
let personObj13 = {
    name: 'aaa',
    age: 123
};
// 这样也可以
personObj3.name = '456';
personObj3.age = 123;
// 注意函数类型接口，接口返回类型为void，而这里返回了string(number),仍不会报错
var funObj;
funObj = function (name, age) {
    return 'asdf';
};
//正确
var funObj2 = {};
funObj2 = (a, b) => { };
class Clock2 {
    constructor(h, m) { }
}
let icomplex2 = function (a, b) {
};
icomplex2.isValid = false;
icomplex2.getName = function () {
    return 'aaa';
};
let obj = {
    name: 'aaa'
};
let obj2 = obj;
obj2.age = 45;
// 这个类首先继承了“内容”接口，实现自身需要的业务
class TestClass {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
/*********************************
 *********** 这里是重点 ***********
 *********************************
 * 1.createClass函数返回“内容接口”
 * 2.createClass形参是“构造函数接口”，以及构造函数必需的参数
 * 两个接口同时进行约束，实现了预期效果
 */
function createClass(ctor, name) {
    return new ctor(name);
}
let clsObj = createClass(TestClass, 'asdf');
class ClockTest {
    constructor(h, m) { }
}
var cs = ClockTest;
var newClock = new cs(7, 30);
//接口也可以不通过interface定义，可以直接申明一个接口字面量，如下
function addNumber(obj) {
}
