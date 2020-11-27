export const simpleClassDecorator = () => {
  // 1. 类装饰器，参数？
  // 装饰器是什么？本身是一个函数
  // 装饰器怎么用？通过@符号，需要配置ts.configdecorator选项
  // 类装饰器接受的参数？构造函数
  // 多个装饰器使用时的执行顺序？
  // 柯里化装饰器

  function testDecorator(constructor: any) {
    constructor.prototype.getName = () => {
      console.log(this)
      return this.name;
    }
    console.log('装饰器');
  }
  function testDecorator1(constructor: any) {
    console.log('1111')
  }

  function testDecorator2(flag: boolean) {
    if (!flag) {
      return function() {}
    }
    return function(construcctor: any) {
      console.log('2222')
    }
  }
  @testDecorator
  @testDecorator1
  class Test {
    constructor(private name: string) {
      this.name = name;
    }
  }

  let t = new Test('wsj');
  console.log(t)
  console.log((t as any).getName())

  @testDecorator2(false)
  class Test2 {

  }
}

export const highClassDecorator = () => {
  type Constructor< T = {}> = new (...args: any []) => T;
  function testDecorator<T extends Constructor>(Constructor: T) {
    return class extends Constructor {
      // name = 'lee';
      name: string;
      constructor(...rest) { 
        super(...rest)
        this.name = 'lee'
      }
    }
  }


  @testDecorator
  class Test {
    name: string;
    constructor(name: string) {
      console.log(1)
      this.name = name;
      console.log(2)
    }

    getName() {
      return this.name;
    }
  }

  let t = new Test('wsj');
  console.log(t)
  console.log(t.getName())

  function testDecorator1() {
    return function testDecorator1<T extends Constructor>(Constructor: T) {
      return class extends Constructor {

      }
    }
  }


  const G = testDecorator1()(
    class Test1 {
      name: string;
      constructor(name: string) {
        console.log(1)
        this.name = name;
        console.log(2)
      }

      getName() {
        return this.name;
      }
  })
  let g = new G('wsj')
  console.log(g.getName())
  console.log(g)
}