import { Color } from '@diez/prefabs';

const palette = {
  background: '#ffffff',
  foreground: '#000000',
  success: {
    lighter: Color.hex('#d3e5ff'),
    light: Color.hex('#3291ff'),
    default: Color.hex('#0070f3'),
    dark: Color.hex('#0761d1'),
  },
  error: {
    lighter: Color.hex('#f7d4d6'),
    light: Color.hex('#ff1a1a'),
    default: Color.hex('#e00'),
    dark: Color.hex('#c50000'),
  },
  warning: {
    lighter: Color.hex('#ffefcf'),
    light: Color.hex('#f7b955'),
    default: Color.hex('#f5a623'),
    dark: Color.hex('#ab570a'),
  },
  cyan: {
    lighter: Color.hex('#aaffec'),
    light: Color.hex('#79ffe1'),
    default: Color.hex('#50e3c2'),
    dark: Color.hex('#29bc9b'),
  },
  violet: {
    lighter: Color.hex('#e3d7fc'),
    light: Color.hex('#8a63d2'),
    default: Color.hex('#7928ca'),
    dark: Color.hex('#4c2889'),
  },
  highlight: {
    alert: Color.hex('#ff0080'),
    purple: Color.hex('#f81ce5'),
    violet: Color.hex('#eb367f'),
  },
};

export const designLanguage = {
  palette,
};
