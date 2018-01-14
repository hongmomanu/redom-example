import { el,list } from 'redom';
import { dispatch } from './dispatch';
import { Hello } from './hello';
import { WhiteBoard} from './whiteboard';

class Li {
  constructor () {
    this.el = el('li');
  }
  update (data) {
    this.el.textContent = data.name;
  }
}


export class App {
  constructor () {
    this.el = el('.app',
      this.hello = new Hello(),
      this.whiteboard = new WhiteBoard(),
      this.beginBtn = el('button','1212', {
        onclick: e=> this.whiteboard.draw()
      })
      // this.input = el('input', {
      //   autofocus: true,
      //   oninput: e => dispatch(this, 'hello', this.input.value),
      //   placeholder: 'RE:DOM'
      // })
    );
    //this.data = {};
  }
  update (data) {
    const { hello } = data;

    this.hello.update(hello);

    //this.data = data;
  }
}
