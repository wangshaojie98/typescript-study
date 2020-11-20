// interface, type, implements, extends
export const _class = () => {
  // private, protected, public
  // public 能被类和类外使用
  // private 只能在类内部使用
  // procted 只能在类内和子类使用

  // 类外指实例
  class Person {
    private name: string = 'wsj';
    protected age: number = 22;
    public sayHi() {
      console.log("hi")
    }

    public sayName() {
      console.log(this.name)
    }

    public setName(name) {
      this.name = name;
    }
  }

  class Teacher extends Person {
    constructor() {
      super();
      console.log(this.age)
    }
  }

  const person = new Person();
  const teacher = new Teacher();
  // console.log(person.name)
  // person.name = 'wsj';
  person.sayHi();
  person.sayName();
  person.setName('gy');
  person.sayName();
  // console.log(person.name);


  // 构造函数，this使用的属性，必须用public、protected、private修饰
  class Car {
    // 传统写法
    // public vech: string;
    // constructor(vech) {
    //   this.vech = vech;
    // }
    
    constructor(public vech: string) {
      this.vech = vech;
    }
  }
}
_class();