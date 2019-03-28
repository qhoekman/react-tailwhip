import styled from '@emotion/styled';
import React from 'react';

import PrimaryButton from './primary-button';

export const SecondaryButton = styled(PrimaryButton)(({ theme }) => ({
  color: theme.colors.primary,
  backgroundColor: theme.colors.transparent,
  boxShadow: theme.shadows.none,
  border: `${theme.borderWidths.sm} solid ${theme.colors.primary}`
}));
