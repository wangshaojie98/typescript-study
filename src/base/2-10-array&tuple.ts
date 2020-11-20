const array_tuole = () => {
  // 数组
  const arr: (number | string)[] = [1, '2'];
  const stringArr: string [] = ['1'];
  const undefinedArr: undefined [] = [undefined];

  // type alias 类型别名
  type User = { 
    name: string;
    age: number;
  }

  class Teacher {
    name: string;
    age: number;
  }

  const objArr: User [] = [{
    name: 'wsj',
    age: 22
  }, 
  new Teacher()
  ];


  // 元组 typle
  const teacherInfo: [string, string, number] = ['w', 's', 1];
  // csv
  const teacherList: [string, string, number] [] = [
    ['dell', 'lee', 19],
    ['wsj', 'gy', 22]
  ]

}