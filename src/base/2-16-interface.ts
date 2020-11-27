// interface, type, implements, extends
export const abstractClass = () => {
  // interface, abstract
  class Person {
    readonly name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  let person = new Person('wsj');
  console.log(person.name)
  // person.name = 'gy'; Cannot assign to 'name' because it is a read-only property.



  // abstract class
  abstract class Geom {
    width: number;
    getType() {
      return 'Geom';
    }

    abstract getArea(): number;
  }
  class Circle extends Geom{
    getArea() {
      return 123;
    }
  }

  class Square {
    getArea() {}
  }

  class Triangle {
    getArea(){
      
    }
  }

  // interface

  interface Personal {
    name: string;
  }
  interface Teacher extends Personal {
    name: string;
  }

  interface Student extends Personal {
    age: number;
  }
  // const getUserInfo = (user: Teacher | Student) => {
  //   return user.name;
  // }
  const getUserInfo = (user: Personal) => {
    return user.name;
  }

  const teacher = {
    age: 22,
    name: 'wsj'
  }

  const student = {
    age: 21,
    name: 'gy'
  }

  console.log(getUserInfo(teacher))
  console.log(getUserInfo(student))
}
abstractClass();