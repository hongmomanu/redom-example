import { el, text } from 'redom';

export class Hello {
  constructor () {
    this.el = el('h1',
      'Hello 吞吞吐吐拖  ',
      this.subject = text('RE:DOM反反复复付付'),
      '!'
    );
  }
  update (data) {
    const { subject } = data;

    this.subject.textContent = subject || 'RE:DOM';

    this.data = data;
  }
}
