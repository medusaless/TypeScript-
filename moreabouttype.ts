/**
 * 高级类型
 */

//1.且类型（既是A又是B)
interface Bird {
    fly();
}

interface Fish {
    swim();
}

interface Dog {
    yell();
}
interface BirdFish extends Fish, Bird { }

function test(bf: BirdFish): Fish & Bird {
    return bf;
}

/**
 * 1.或类型（是A或者是B)
 * 
 * 这里要通过“类型断言”（类型转换）来区分变量的具体类型
 *  
 */
function getSmallPet(a: Fish | Bird): Fish | Bird {
    // ...
    return a;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

let pet = getSmallPet({ fly() { } });
if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}


// 基本类型直接用typeof来判断
function test5(value: string | number) {
    if (typeof value === 'string') {
        return value.toString();
    } else {
        return value;
    }
}


// 类型别名
type NameAgeType = { name: string, age: number };