export const functions = () => {
  function add(first: number, second: number): number {
    return first + second
  }
  add(1, 2)
  
  // 无返回值
  function say(): void {
    console.log('hell0 TypeScript')
  }
  
  
  // 解构参数
  function getSum({a, b}: {a: number, b: number}): number {
    return a + b;
  }
  const sum = getSum({a:1, b: 2});

function getNum({ a }: { a: number }) {
  return a;
}

const num = getNum({ a: 3 });

}