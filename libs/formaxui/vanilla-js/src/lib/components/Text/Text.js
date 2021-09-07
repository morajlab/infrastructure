import {
  createCustomElement,
  getCustomElementName,
} from '../../../../libs/utils/utils.js';
import { BaseElement } from '../index.js';

export class Text extends BaseElement {
  constructor() {
    super();

    this.styles = document.createElement('style');
    console.log(this.styles);
    this.styles.appendChild(
      document.createTextNode(`${getCustomElementName(this.constructor)} {
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif
      }`)
    );
  }

  connectedCallback() {
    this.appendChild(this.styles);
  }
}

export default Text;

createCustomElement(Text);
