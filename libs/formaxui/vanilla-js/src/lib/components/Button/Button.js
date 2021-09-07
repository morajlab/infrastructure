import {
  createCustomElement,
  getCustomElementName,
} from '../../../../libs/utils/utils.js';
import { BaseElement, Text } from '../index.js';

export class Button extends BaseElement {
  connectedCallback() {
    const styles = document.createElement('style');
    const text = document.createElement(getCustomElementName(Text));
    text.innerHTML = 'Example Button';

    styles.appendChild(
      document.createTextNode(
        `${getCustomElementName(BaseElement)} { color: red; }`
      )
    );

    this.appendChild(text);
    this.appendChild(styles);
  }
}

export default Button;

createCustomElement(Button);
