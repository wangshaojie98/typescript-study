// 定义全局变量
// 1. declare var $: () => void;
// 2. declare var $: (params: () => void) => void

// 定义全局函数，函数重载
// declare function $(readyFunc: () => void): void
// declare function $(params: string): {
//   html: (html: string) => {}
// }

interface JqueryInstance {
  html: (html: string) => {}
}
// declare function $(selector: string): JqueryInstance


// 使用函数重载，实现函数重载
interface JQuery {
  (readyFunc: () => void): void;
  (selector: string): JqueryInstance
}

// declare var $: JQuery;
declare namespace $ {
  namespace fn {
     class init {}
  }
};