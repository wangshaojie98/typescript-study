function sayHello(person: string) {
  if (typeof person === "string") {
    return "Hello, " + person;
  } else {
    throw new Error("person is not a string");
  }
}

let user = "1";
console.log(sayHello(user));

let isDone: boolean = false;
// let createdByNewBoolean: boolean = new Boolean(1);
let createdByBoolean: boolean = Boolean(1);

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// 二进制
let binaryLiteral: number = 0b1010;

// string
let myName: string = "Tom";
let myAge: number = 22;

let sentente: string = `Hello, my name is ${myName}. I'll be${myAge + "1"} years old next month`;

// 空值
function alertName(): void {
  alert(myName);
}
let unusable: void = undefined;

// Null or undefined
let u: undefined = undefined;
let n: null = null;

// 与void区别
let num: number = undefined;
let v: void = undefined;
// num = v; throw Error

/**
 * 任意值
 */
{
  let myFavouriteNumber: string = "7";
  // myFavouriteNumber = 7; throw Error

  let myFavourite: any = "seven";
  myFavourite = 7;
  myFavourite = () => {};
}

{
  // 任意值的属性和方法
  let anything: any = "hello";
  console.log(anything.myName);
  console.log(anything.myName.firstName);

  anything.setName("Jerry");

  // 未声明类型的变量，会被识别成任意值类型
  let something;
  something = "seven";
  something = 7;
  something.setName("tom");
}

/**
 * 类型推断
 */
{
  let myFavoriteNumber = "seven";
  // myFavoriteNumber = 7; TS2322: Type 'number' is not assignable to type 'string'
}

/**
 * 联合类型
 */
{
  let myFavoriteNumber: string | number;
  myFavoriteNumber = "seven";
  myFavoriteNumber = 7;

  // myFavoriteNumber = true; TS2322: Type 'boolean' is not assignable to type 'string | number'.
}
{
  // 访问联合类型的属性或方法
  function getLength(something: string | number) {
    // return something.length; Property 'length' does not exist on type 'string | number'.Property 'length' does not exist on type 'number'.
    return something.toString();
  }

  let myFavoriteNumber: string | number;
  myFavoriteNumber = "seven";

  console.log(myFavoriteNumber.length);
  myFavoriteNumber = 7;
  // console.log(myFavoriteNumber.length); Property 'length' does not exist on type 'number'.
}

/**
 * 对象的类型--接口
 */
{
  // 属性的多与少，和刚刚好
  interface Person {
    name: string;
    age: number;
  }

  let tom: Person = {
    name: "Tom",
    age: 25,
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
  // 可选属性
  interface Person {
    name: string;
    age: number;
    gender?: string;
  }

  let tom: Person = {
    name: "Tom",
    age: 33,
  };

  // let jack: Person = {
  //   name: "Jack",
  //   age: 22,
  //   favourite: ['apple', 'peach']
  // }
  // TS2322: Type '{ name: string; age: number; favourite: string[]; }' is not assignable to type 'Person'.
  // Object literal may only specify known properties, and 'favourite' does not exist in type 'Person'.
}

{
  // 任意属性
  // interface Person {
  //   name: string,
  //   age?: number,
  //   [propName: string]: string
  // }
  // Property 'age' of type 'number' is not assignable to string index type 'string'.

  interface Person {
    name: string;
    age: number;
    [propName: string]: string | number;
  }

  let tom: Person = {
    name: "Tom",
    age: 22,
    gender: "male",
  };
}

{
  // 只读属性
  interface Person {
    readonly id: number;
    name: string;
    age: number;
    [propName: string]: any;
  }

  let tom: Person = {
    id: 22,
    name: "Tom",
    age: 22,
    gender: "male",
  };
  // tom.id = 33; Cannot assign to 'id' because it is a read-only property.
}

/**
 * 数组的类型
 */
{
  // 类型 + 尖括号
  let fibonacci: number[] = [1, 2, 3, 4];
  // fibonacci = [1, '2'] Type 'string' is not assignable to type 'number'.
  // fibonacci.push('1'); Argument of type 'string' is not assignable to parameter of type 'number
}

{
  // 数组 + 泛型
  let fibonacci: Array<number> = [1, 3, 4, 7];

  interface NumberArray {
    [index: number]: number;
    length: number;
  }

  let fib: NumberArray = [1, 2];
}

{
  // 类数组
  function sum() {
    // let args: number[] = arguments;  Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
    let args: {
      [index: number]: number;
      length: number;
      callee: Function;
    } = arguments;
  }

  function fn() {
    let args: IArguments = arguments; // 内置接口
  }

  interface MyArguments {
    [index: number]: number;
    length: number;
    callee: Function;
  }
}

{
  // any在数组中的应用
  let list: any = [1, "a", {}, []];
}

/**
 * 函数的类型
 */

{
  function sum1(x: number, y: number): number {
    return x + y;
  }
  // sum1(1, 2, 3); Expected 2 arguments, but got 3.
  // sum1(1);  Expected 2 arguments, but got 1.
}

{
  // 函数表达式
  let numSum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
  };
}

{
  // 接口定义函数
  interface searchFun {
    (source: string, subString, string): boolean;
  }

  let mySearch: searchFun;
  mySearch = function (source: string, substring: string): boolean {
    return source.search(substring) !== -1;
  };
}

{
  // 可选参数
  function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
      return firstName + lastName;
    } else {
      return firstName;
    }
  }

  buildName("wang");
  buildName("wang", "shaojie");

  // A required parameter cannot follow an optional parameter.
  // function buildName1(firstName?: string, lastName: string): string {
  //   if (lastName) {
  //     return firstName + lastName;
  //   } else {
  //     return firstName;
  //   }
  // }
}

{
  // 参数默认值
  function buildName3(firstName: string, lastName: string = "shaojie"): string {
    return firstName + lastName;
  }
  buildName3("wang");
  buildName3("wang", "shaojie");
}

{
  // 剩余参数
  function push(array: any[], ...items: any[]): void {
    items.forEach(function (item) {
      array.push(item);
    });
  }
}

{
  // 重载
  function reverse(x: number | string): number | string {
    if (typeof x === "number") {
      return Number(x.toString().split("").reverse().join(""));
    }

    if (typeof x === "string") {
      return x.split("").reverse().join();
    }
  }

  function reverse1(x: number): number;
  function reverse1(x: string): string;
  function reverse1(x: string | number): string | number {
    if (typeof x === "number") {
      return Number(x.toString().split("").reverse().join(""));
    }

    if (typeof x === "string") {
      return x.split("").reverse().join();
    }
  }
}

/**
 * 类型断言：可以手动指定一个值的类型
 */
{
  // 联合类型推断为其中一个类型
  interface Cat {
    name: string;
    run(): void;
  }

  interface Fish {
    name: string;
    swim(): void;
  }

  function getName(animal: Cat | Fish): string {
    // return animal.swim();
  // Property 'swim' does not exist on type 'Cat | Fish'.
  // Property 'swim' does not exist on type 'Cat'
    return animal.name;
  }

  function isFish(animal: Cat | Fish): boolean {
    // if (typeof animal.swim === 'function') {
      // return true;
    // }
  // Property 'swim' does not exist on type 'Cat | Fish'.
  // Property 'swim' does not exist on type 'Cat'.
    if (typeof (animal as Fish).swim === "function") {
      return true;
    }
    return false;
  }
}

{
  // 将父类断言为一个更具体的子类
  class ApiError extends Error {
    code: number = 0;
  }

  class HttpError extends Error {
    statusCode: number = 200;
  }

  function isApiError(error: Error) {
    // if (typeof (error as ApiError).code === "number") {
    //   return true;
    // }

    if (error instanceof ApiError) {
      return true;
    }
    return false;
  }

  interface ApiError1 extends Error{
    code: number;
  }

  interface HttpError1 extends Error{
    statusCode: number;
  }

  function isApiError1(error: Error) {
    if (typeof (error as ApiError1).code === "number") {
      return true;
    }

    return false;
  }
}

{
  // 将任何一个类型断言为any
  // window.foo; 类型“Window & typeof globalThis”上不存在属性“foo”。
  (window as any).foo = 1;
}

{
  // 将any断言为一个具体的类型
  function getCacheData(key: string): any {
    return (window as any).cache[key];
  }
}



