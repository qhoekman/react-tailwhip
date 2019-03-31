import { BorderRadius, BorderWidths } from './theme/border';
import { Colors } from './theme/colors';
import { Opacity, Shadows } from './theme/effects';
import { Grid as GridSettings } from './theme/grid';
import { ScreenSettings, ZIndexSettings } from './theme/layout';
import { Heights, MaxHeights, MaxWidths, MinHeights, MinWidths, Widths } from './theme/sizing';
import { Margins, NegativeMargins, Paddings } from './theme/spacing';
import { SVGSettings } from './theme/svg';
import { Fonts, FontSizes, FontWeights, Leading, Tracking } from './theme/typography';

export const Theme = {
  colors: {
    ...Colors,
    primary: Colors.blueDark,
    secondary: Colors.blueLight
  },
  screens: {
    ...ScreenSettings
  },
  fonts: {
    ...Fonts
  },
  fontSizes: {
    ...FontSizes
  },
  fontWeights: {
    ...FontWeights
  },
  leading: {
    ...Leading
  },
  tracking: {
    ...Tracking
  },
  borderWidths: {
    ...BorderWidths
  },
  borderRadius: {
    ...BorderRadius
  },
  width: {
    ...Widths
  },
  height: {
    ...Heights
  },
  minWidth: {
    ...MinWidths
  },
  minHeight: {
    ...MinHeights
  },
  maxWidth: {
    ...MaxWidths
  },
  maxHeight: {
    ...MaxHeights
  },
  padding: {
    ...Paddings
  },
  margin: {
    ...Margins
  },
  negativeMargin: {
    ...NegativeMargins
  },
  shadows: {
    ...Shadows
  },
  zIndex: {
    ...ZIndexSettings
  },
  opacity: {
    ...Opacity
  },
  svg: {
    ...SVGSettings
  },
  grid: {
    ...GridSettings
  }
};

export declare type Color = keyof typeof Theme.colors;
