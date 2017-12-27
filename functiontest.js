"use strict";
/**
 * 1.当用了?过后，不能给该参数赋默认值
 */
function getName(id) {
}
/**
 *
 * @param id
 * @param restArgs typescript
 */
function getName2(id, ...restArgs) {
    console.log(arguments);
}
function getItems(x) {
    if (typeof x == "object") {
    }
    else if (typeof x == "string") {
    }
}
getItems({ id: '123', name: 'aaa' });
