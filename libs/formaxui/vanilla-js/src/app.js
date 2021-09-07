import {
  createCustomElement,
  registerCustomElement,
} from '../libs/utils/utils.js';
import { Button, BaseElement } from './lib/components/index.js';

export class App extends BaseElement {
  connectedCallback() {
    this.appendChild(createCustomElement(Button));
  }
}

export default App;

registerCustomElement(App);
