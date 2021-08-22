import {
  Color,
  DropShadow,
  Image,
  Lottie,
  Toward,
  Typograph,
  Font,
  LinearGradient,
  Point2D,
  TextAlignment,
} from '@diez/prefabs';
import { Margin } from './components/Margin';

const colors = {
  white: Color.hex('#FFFFFF'),
  black: Color.hex('#000010'),
  purple: Color.rgb(86, 35, 238),
  darkPurple: Color.rgb(22, 11, 54),
};

const palette = {
  contentBackground: colors.white,
  text: colors.black,
  caption: colors.purple,
  headerBackground: LinearGradient.make(
    Toward.Bottom,
    colors.darkPurple,
    colors.black
  ),
};

const Fonts = {
  SourceSansPro: {
    Regular: Font.fromFile('assets/SourceSansPro-Regular.ttf'),
  },
};

const typography = {
  heading1: new Typograph({
    font: Fonts.SourceSansPro.Regular,
    fontSize: 24,
    color: palette.text,
  }),

  body: new Typograph({
    font: Fonts.SourceSansPro.Regular,
    fontSize: 18,
    color: palette.text,
    alignment: TextAlignment.Center,
  }),

  caption: new Typograph({
    font: Fonts.SourceSansPro.Regular,
    fontSize: 14,
    color: palette.caption,
  }),
};

const images = {
  logo: Image.responsive('assets/logo.png', 52, 48),
  masthead: Image.responsive('assets/masthead.png', 208, 88),
};

const layoutValues = {
  spacingSmall: 5,
  spacingMedium: 25,
  spacingLarge: 40,
  contentMargin: new Margin({
    top: 40,
    left: 10,
    right: 10,
    bottom: 10,
  }),
};

const strings = {
  title: 'Diez',
  caption: 'Keep your designs in sync with code',
  helper:
    'Modify the contents of “src/DesignLanguage.ts” (relative to the root of the Diez project) to see changes to the design language in real time.',
};

const shadows = {
  logo: new DropShadow({
    offset: Point2D.make(0, 1),
    radius: 16,
    color: colors.black.fade(0.59),
  }),
};

export const designLanguage = {
  palette,
  typography,
  images,
  layoutValues,
  strings,
  shadows,
  loadingAnimation: Lottie.fromJson('assets/loadingAnimation.json', false),
};
