/**
 *  在TypeScript里，成员都默认为 public
 */

class Person {
    protected name2: string = 'medusa';
}

/**
 * 和ES6不同，ES6类的实例变量直接在构造函数中this.XXX = XXX即可（和Java,C#不一致）
 * Typescript构造函数的形参赋值对象必须是已在类中申明了的变量（和Java,C#一致）
 */
class CleverPerson extends Person {
    static staticName: string = 'static name'
    private _name: string = 'private name';
    constructor() {
        super();
    }

    get privateName(): string {
        return this._name;
    }

    getName(name: string = 'asdf') {
        console.log(this.name2)
    }
}

let p = new CleverPerson();


/**
 * 抽象类
 * 1.他们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节
 * 2.抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
 */

abstract class AbstractPerson {
    abstract getName(): string;
    protected sex: string;
}

class ConcretePerson extends AbstractPerson {
    private _name = 'hahaha';
    public getName(): string {
        return this._name;
    }
}

/**
 * 类继承接口
 */

 interface IPerson{
     name:string,
     age:number
 }

 class Person3 implements IPerson{
     name:string;
     age:number;
     sex:string;
 }

 /**
  * 接口变量 = 类实例（和Java,C#相同）
  */
 let p4:IPerson = new Person3();
 


/**
 * 接口继承类
 * 1.当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
 * 接口同样会继承到类的private和protected成员。当你创建了一个接口继承了一个拥有私有或受保护的成员的类时
 * 
 * 2.这种接口类型只能被这个类或其子类所实现
 */

class Student {
    name: string = 'aaa';
    age: number;
    protected sex: string;
    private score: number = 123;
}

interface StudentInterface extends Student {
    getName(): void
}


class SubStudent extends Student implements StudentInterface{
    getName(): string {
        return 'asdf';
    }
}

let s2: StudentInterface = new SubStudent();










