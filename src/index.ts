// 写一个try-catch Method装饰器
function catchError(msg: string) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    try {
      let fn = descriptor.value;
      fn();
    } catch (err) {
      console.error(msg);
    }
  }
}

const userInfo: any = undefined;
class Person {
  @catchError('userInfo.name不存在')
  getName() {
    return userInfo.name;
  }
  
  @catchError('userInfo.age不存在')
  getAge() {
      return userInfo.age;
  }
}

let t = new Person();
t.getName()
t.getAge()

console.log(t)