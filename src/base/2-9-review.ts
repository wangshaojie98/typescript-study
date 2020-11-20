export let review = () => {
  // 基础类型： boolean、number、string、null、undefined、symbol, void,
  let count;
  count = 123;

  // 对象类型, {}, Class, function, []
  const func = (str: string) => {
    return parseInt(str);
  }

  const func1: (str: string) => number = (str) => {
    return parseInt(str);
  }

  const date = new Date();

  const rawData = "{'name': 'wsj'}";
  const newData = JSON.parse(rawData);

  interface Person {
    name: string
  }
  const newData1: Person = JSON.parse(rawData);


  let temp: string | number = 123;
  temp = '456';
}