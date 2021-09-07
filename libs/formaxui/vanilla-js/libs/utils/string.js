export const camelToSnakeCase = (text, token = '-') => {
  text = text.replace(/[A-Z]/g, (letter) => `${token}${letter.toLowerCase()}`);

  return text[0] == token ? text.substring(1) : text;
};

export const getObjectDepthNames = (
  props,
  baseName = '',
  token = ' ',
  filter = (p) => p
) => {
  const result = [];

  const pattern = (_baseName, _token, _value) =>
    `${_baseName}${_token}${filter(_value)}`.trim();

  for (const [key, value] of Object.entries(props)) {
    if (typeof value == 'object') {
      for (const [_key, _value] of Object.entries(
        getObjectDepthNames(value, key, token)
      )) {
        result.push(pattern(baseName, token, _value));
      }
    } else {
      result.push(pattern(baseName, token, `${key}${token}${value}`));
    }
  }

  return result;
};
