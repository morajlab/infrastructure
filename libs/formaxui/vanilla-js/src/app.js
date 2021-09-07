import {
  createCustomElement,
  getCustomElementName,
} from '../libs/utils/utils.js';
import { Button, BaseElement } from './lib/components/index.js';

export class App extends BaseElement {
  connectedCallback() {
    this.appendChild(document.createElement(getCustomElementName(Button)));
  }
}

export default App;

createCustomElement(App);
