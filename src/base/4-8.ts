// interface, type, implements, extends
import {Components} from './4-7-nameSpace'
namespace Home {
  export class Page {
    constructor() {
      console.log('page')
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}
let page = new Home.Page();