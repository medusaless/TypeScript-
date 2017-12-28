"use strict";
/**
 * 高级类型
 */
function test(bf) {
    return bf;
}
/**
 * 1.或类型（是A或者是B)
 *
 * 这里要通过“类型断言”（类型转换）来区分变量的具体类型
 *
 */
function getSmallPet(a) {
    // ...
    return a;
}
function isFish(pet) {
    return pet.swim !== undefined;
}
let pet = getSmallPet({ fly() { } });
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.yell();
}
