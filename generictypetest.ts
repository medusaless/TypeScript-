// 规律：命名均为 类型名（function/interface/class) 名称<泛型类名>。


// 泛型函数

function test<T>(num: T): T {
    return num;
}

// 泛型接口
interface genericInterface<T> {
    (id: T): T
}

// 泛型类
class GenericClass<T>{
    name: T;
    add: (a: T, b: T) => T;
}

// 泛型约束

interface NumericType {
    num: number
}

function func<T extends NumericType>(v:T):T{
    return v;
}

//报错 func('asdf')

func({
    num:123,
    age:234
})

// 泛型里使用类类型
function create<T>(c: {new(name:string): T; }): T {
    return new c('asdf');
}