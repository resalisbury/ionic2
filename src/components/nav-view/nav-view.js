import {Ion} from '../ion'

export class NavView extends Ion {

  // viewControllers: Stack<ViewController>;
  //   visibleViewController: ViewController;

  //   push(viewController) {
  //     stack.push(viewController)
  //   }
  //   pop(viewController) {
  //     stack.pop(viewController)
  //   }
  //   set viewControllers(v) {
  //     this.viewControllers = v
  //   }

  constructor() {
    console.log('construct nav-view')
    this.history = [] // <---- would be fancy pants
  }

}