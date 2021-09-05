import { createElement } from '../../../../libs/utils/index.js';

export default class Button extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button>Example Button</button>`;
  }
}

createElement('formax-button-component', Button);
