import { camelToSnakeCase } from './string.js';

export const fixCustomElementName = (name) => camelToSnakeCase(name);

export const getCustomElementName = (
  component,
  name = null,
  namespace = 'formax'
) => {
  const componentName = fixCustomElementName(
    name && name.length > 0 ? name : component.name
  );

  return `${namespace ? `${namespace}-` : ''}${componentName}`;
};

export const createCustomElement = (element) =>
  document.createElement(
    getCustomElementName(element, typeof element == 'string' ? element : null)
  );

export const registerCustomElement = (
  component,
  name = null,
  namespace = 'formax'
) => {
  const customElementName = getCustomElementName(component, name, namespace);

  if (!customElements.get(customElementName)) {
    customElements.define(customElementName, component);
  }
};
