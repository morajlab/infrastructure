export const createCustomElement = (name, component, namespace = 'formax') => {
  const componentName = `${namespace ? `${namespace}-` : ''}${name}`;

  if (!customElements.get(componentName)) {
    customElements.define(componentName, component);
  }
};

export const getCustomElementName = (name, namespace = 'formax') => {
  return `${namespace ? `${namespace}-` : ''}${name}`;
};
