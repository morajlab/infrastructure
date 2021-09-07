export const camelToSnakeCase = (text, token = '-') =>
  text
    .replace(/[A-Z]/g, (letter) => `${token}${letter.toLowerCase()}`)
    .substring(1);
