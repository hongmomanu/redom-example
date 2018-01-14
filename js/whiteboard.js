import { el, text } from 'redom';

export class WhiteBoard {
  constructor() {
    this.el = el('canvas', { style: 'width: 400px;height:300px' });
  }
  onmount () {
    console.log('mounted WhiteBoard');
    paper.install(window);
    var paperScope = new paper.PaperScope();
    paperScope.setup(this.el);
  }
  draw() {
    var tool = new Tool();
    var path;
    var layer = new Layer();
    // Define a mousedown and mousedrag handler
    tool.onMouseDown = function (event) {
      //layer.visible = false;
      console.log('mouse down');
      path = new Path();
      path.strokeColor = new Color({ hue: Math.random() * 360, saturation: 1, brightness: 1 });
      path.add(event.point);
    }
    tool.onMouseUp = (event) => {
    }

    tool.onMouseDrag = function (event) {
      path.add(event.point);
    }
    layer.addChild(path)
  }
  update(data) {
    //const { subject } = data;

    //this.subject.textContent = subject || 'RE:DOM';

    //this.data = data;
  }
}
