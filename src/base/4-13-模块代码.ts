declare module 'jquery' {
  interface JQueryInstance {
    html: (html: string) => {}
  }

  function $(readyFunc: () => void): void;
  function $(selector: string): JQueryInstance;

  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $
}