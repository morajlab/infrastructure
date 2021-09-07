import { registerCustomElement, style } from '../../../../libs/utils/index.js';
import { styles } from './Text.styles.js';
import { BaseElement } from '../index.js';

export class Text extends BaseElement {
  constructor() {
    super();

    this.styles = style(styles(), this.constructor);
  }

  connectedCallback() {
    this.appendChild(this.styles);
  }
}

export default Text;

registerCustomElement(Text);
