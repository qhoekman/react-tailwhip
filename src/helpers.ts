import css, { SerializedStyles } from '@emotion/css';

import { Theme } from './theme';

type Breakpoint = keyof (typeof Theme.screens);
type Accumulator = { [K in Breakpoint]: (cls: SerializedStyles) => SerializedStyles };

export const mq = (Object.keys(Theme.screens) as Breakpoint[]).reduce<Accumulator>(
  (accumulator, label) => {
    const minWidth: string = Theme.screens[label];

    return {
      ...accumulator,
      [label]: (cls: string) => css`
        @media (min-width: ${minWidth}) {
          ${cls};
        }
      `
    };
  },
  {
    xs: () => css``,
    sm: () => css``,
    md: () => css``,
    lg: () => css``,
    xl: () => css``
  }
);
