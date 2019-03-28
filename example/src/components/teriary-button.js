import styled from '@emotion/styled';
import React from 'react';

import { SecondaryButton } from './secondary-button';

export const TeriaryButton = styled(SecondaryButton)(({ theme }) => ({
  color: theme.colors.primary,
  backgroundColor: theme.colors.transparent,
  border: 0,
  fontWeight: theme.fontWeights.normal,
  textDecoration: 'underline',
  textUnderlinePosition: 'under'
}));
