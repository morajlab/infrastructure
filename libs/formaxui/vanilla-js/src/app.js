import { createElement } from '../libs/utils/index.js';
import './lib/components/index.js';

export default class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>This is for test</p>
    <formax-button-component></formax-button-component>`;
  }
}

createElement('formax-app-root', App);
