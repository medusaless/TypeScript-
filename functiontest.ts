/**
 * 1.当用了?过后，不能给该参数赋默认值
 */

 function getName(id?:string){

 }

 /**
  * 
  * @param id 
  * @param restArgs typescript
  */
 function getName2(id?:string, ...restArgs:any[]){
     console.log(arguments)
 }

 /**
  * 
  * 函数重载
  * 注：其实不谢第一，第二个getItems也可以，不过这写可以限定形参的类型，如必须形如{id:string,name:string}
  */
 function getItems(id:string):Array<any>;
 function getItems(obj:{id:string,name:string}):Array<any>;
 function getItems(x): any {
    if (typeof x == "object") {
    }
    else if (typeof x == "string") {
    }
}

getItems({id:'123',name:'aaa'})