// interface, type, implements, extends
export const interfaceP = () => {
  interface Person {
    // readonly name: string,
    name: string;
    age?: number;
    num: number;
    say(): void;
    [propName: string]: any; // 只能包含上述的所有类型
  }
  
  interface Teacher extends Person {
    teach(): string
  }

  type Person1 = {
    name: string
  }

  const getPersonName = (person: Person1) => {
    return person.name;
  }

  const setPersonName = (person: Teacher, name: string) => {
    person.name = name;
    console.log(name)
  }
  const person = {
    name: 'wsj',
    age: 22,
    num: 11,
    h: '11',
    say() {
      console.log(this.age)
    },
    teach() {
      return 'teach'
    }
  }
  const person1 = {
    name: 'gy'
  }
  
  // TS2345: Argument of type '{ name: string; age: number; num: number; h: string; say(): void; }' is not assignable to parameter of type 'Person1'.
  // Object literal may only specify known properties, and 'age' does not exist in type 'Person1'.
  getPersonName({
    name: 'wsj',
    // age: 22,
  })
  getPersonName(person1)
  setPersonName(person, 'gy')
  setPersonName(person, 'gy')
  interface sayHello {
    (hello: string): string
  }

  const sayHello: sayHello = (hello) => {
    return hello;
  }
  sayHello('111');

  class User implements Person {
    name = 'dell';
    num = 3;
    say(){

    }
  }
}
interfaceP();