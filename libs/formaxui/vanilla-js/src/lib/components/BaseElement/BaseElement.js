import { registerCustomElement } from '../../../../libs/utils/utils.js';

export class BaseElement extends HTMLElement {}

export default BaseElement;

registerCustomElement(BaseElement);
