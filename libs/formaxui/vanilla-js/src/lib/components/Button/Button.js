import {
  createCustomElement,
  registerCustomElement,
  style,
} from '../../../../libs/utils/index.js';
import styles from './Button.styles.js';
import { BaseElement, Text } from '../index.js';

export class Button extends BaseElement {
  constructor() {
    super();

    this.styles = style(styles(), this.constructor);
  }

  connectedCallback() {
    const text = createCustomElement(Text);
    text.innerHTML = 'Example Button';

    this.appendChild(text);
    this.appendChild(this.styles);
  }
}

export default Button;

registerCustomElement(Button);
