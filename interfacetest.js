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
