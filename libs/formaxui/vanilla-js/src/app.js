import {
  createCustomElement,
  getCustomElementName,
} from '../libs/utils/utils.js';
import { Button } from './lib/components/index.js';

export class App extends HTMLElement {
  static name = 'app-root';

  connectedCallback() {
    this.appendChild(document.createElement(getCustomElementName(Button.name)));
  }
}

export default App;

createCustomElement(App.name, App);
