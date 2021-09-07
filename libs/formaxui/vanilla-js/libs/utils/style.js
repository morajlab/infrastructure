import { getCustomElementName } from './utils.js';
import { camelToSnakeCase, getObjectDepthNames } from './string.js';

export const normalizeStyleObject = (props) => {
  const result = {};

  for (const [key, value] of Object.entries(props)) {
    result[camelToSnakeCase(key)] =
      typeof value == 'object' ? normalizeStyleObject(value) : value;
  }

  return result;
};

export const styleObjectToString = (props, element) => {
  let result = '';
  const tempToken = '%';
  const elementName =
    typeof element == 'string' ? element : getCustomElementName(element);
  const normalized = getObjectDepthNames(
    normalizeStyleObject(props),
    elementName,
    tempToken
  );

  for (const value of normalized) {
    const styleArray = value.split(tempToken);

    result += `${styleArray.slice(0, styleArray.length - 2).join(' ')} { ${
      styleArray[styleArray.length - 2]
    }: ${styleArray[styleArray.length - 1]}; }`;
  }

  return result;
};

export const style = (props, element) => {
  const styleElement = document.createElement('style');

  styleElement.innerHTML = styleObjectToString(props, element);

  return styleElement;
};
