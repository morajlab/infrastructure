import {
  createCustomElement,
  getCustomElementName,
} from '../../../../libs/utils/utils.js';
import { BaseElement } from '../index.js';

export class Button extends HTMLElement {
  static name = 'button-component';

  connectedCallback() {
    const baseElement = document.createElement(
      getCustomElementName(BaseElement.name)
    );
    const styles = document.createElement('style');

    baseElement.appendChild(document.createTextNode('Example Button'));
    styles.appendChild(
      document.createTextNode(
        `${getCustomElementName(BaseElement.name)} { color: red; }`
      )
    );

    this.appendChild(baseElement);
    this.appendChild(styles);
  }
}

export default Button;

createCustomElement(Button.name, Button);
