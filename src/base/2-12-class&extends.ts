// interface, type, implements, extends
export const class_extends = () => {
  class Person {
    name = 'wsj';
    getName() {
      return this.name;
    }
  }

  class Teacher extends Person {
    getTeacherName() {
      return this.name;
    }

    getName() {
      return this.name + super.getName();
    }
  }

  const person = new Person();
  const teacher = new Teacher();
  console.log(person.getName());
  console.log(teacher.getName());
}
class_extends();