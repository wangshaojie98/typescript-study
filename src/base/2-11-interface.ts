export const interfaceP = () => {
  // interface, type, implements, extends
  interface Person {
    name: string
  }

  const getPersonName = (person: Person) => {
    return person.name;
  }

  const setPersonName = (person: Person) => {
    person.name = name;
  }
}