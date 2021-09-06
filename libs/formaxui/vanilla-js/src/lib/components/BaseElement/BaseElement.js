import { createCustomElement } from '../../../../libs/utils/utils.js';

export class BaseElement extends HTMLElement {
  static name = 'base-element';
}

export default BaseElement;

createCustomElement(BaseElement.name, BaseElement);
