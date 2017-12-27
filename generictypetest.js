"use strict";
// 规律：命名均为 类型名（function/interface/class) 名称<泛型类名>。
// 泛型函数
function test(num) {
    return num;
}
// 泛型类
class GenericClass {
}
function func(v) {
    return v;
}
//报错 func('asdf')
func({
    num: 123,
    age: 234
});
// 泛型里使用类类型
function create(c) {
    return new c('asdf');
}
