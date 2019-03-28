import DefaultTheme from 'react-tailwhip';

export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: DefaultTheme.colors.indigoDark,
    secondary: DefaultTheme.colors.coolGreyDark
  }
};
