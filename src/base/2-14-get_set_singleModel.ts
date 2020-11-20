// interface, type, implements, extends
export const singleModel = () => {
  class Person {
    private static instance: Person;
    private constructor(public name: string){}

    public static getInstance(name: string) {
      if (!this.instance) {
        return this.instance = new Person(name);
      }

      return this.instance;
    }
  }

  // let wsj = new Person('wsj');
  let wsj = Person.getInstance('wsj');
  let gy = Person.getInstance('gy');
  console.log(wsj)
  console.log(gy)
}
singleModel();