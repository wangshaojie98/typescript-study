export const keyof = () => {
  interface Person {
    name: string;
    age: number;
    gender: string;
  }
  
  class Teacher {
    constructor(private info: Person) {}
  
    getInfo<T extends keyof Person>(key: T): Person[T] {
      return this.info[key];
    }
  }
  let t = new Teacher({name: 'wsj', age: 22, gender: 'male'})
  console.log(t)
  console.log(t.getInfo('name'))
}