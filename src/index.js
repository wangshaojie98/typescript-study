function sayHello(person) {
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    }
    else {
        throw new Error('person is not a string');
    }
}
var user = '1';
console.log(sayHello(user));
var isDone = false;
// let createdByNewBoolean: boolean = new Boolean(1);
var createdByBoolean = Boolean(1);
// number
var decLiteral = 6;
var hexLiteral = 0xf00d;
// 二进制
var binaryLiteral = 10;
// string
var myName = "Tom";
var myAge = 22;
var sentente = "Hello, my name is " + myName + ". I'll be" + (myAge + '1') + " years old next month";
// 空值
function alertName() {
    alert(myName);
}
var unusable = undefined;
// Null or undefined
var u = undefined;
var n = null;
// 与void区别
var num = undefined;
var v = undefined;
// num = v; throw Error
/**
 * 任意值
 */
{
    var myFavouriteNumber = '7';
    // myFavouriteNumber = 7; throw Error
    var myFavourite = 'seven';
    myFavourite = 7;
    myFavourite = function () { };
}
{
    // 任意值的属性和方法
    var anything = 'hello';
    console.log(anything.myName);
    console.log(anything.myName.firstName);
    anything.setName('Jerry');
    // 未声明类型的变量，会被识别成任意值类型
    var something = void 0;
    something = 'seven';
    something = 7;
    something.setName('tom');
}
/**
 * 类型推断
 */
{
    var myFavoriteNumber = 'seven';
    // myFavoriteNumber = 7; TS2322: Type 'number' is not assignable to type 'string'
}
/**
 * 联合类型
 */
{
    var myFavoriteNumber = void 0;
    myFavoriteNumber = 'seven';
    myFavoriteNumber = 7;
    // myFavoriteNumber = true; TS2322: Type 'boolean' is not assignable to type 'string | number'.
}
{
    // 访问联合类型的属性或方法
    function getLength(something) {
        // return something.length; Property 'length' does not exist on type 'string | number'.Property 'length' does not exist on type 'number'.
        return something.toString();
    }
    var myFavoriteNumber = void 0;
    myFavoriteNumber = 'seven';
    console.log(myFavoriteNumber.length);
    myFavoriteNumber = 7;
    // console.log(myFavoriteNumber.length); Property 'length' does not exist on type 'number'.
}
/**
 * 对象的类型--接口
 */
{
    var tom = {
        name: 'Tom',
        age: 25
    };
    // let to: Person = { Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.
    //   name: 'To'
    // }
    // let tomm: Person = {
    //   name: 'To',
    //   age: 22,
    //   gender: 'male'
    // }
    // Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
    // Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
}
{
    var tom = {
        name: "Tom",
        age: 33
    };
    var jack = {
        name: "Jack",
        age: 22,
        favourite: ['apple', 'peach']
    };
}
