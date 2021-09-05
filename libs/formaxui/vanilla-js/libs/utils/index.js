export const createElement = (name, component) => {
  if (!customElements.get(name)) {
    customElements.define(name, component);
  }
};
