import styled from '@emotion/styled';
import React from 'react';

const PrimaryButton = styled('a')(({ theme }) => ({
  color: theme.colors.white,
  backgroundColor: theme.colors.primary,
  borderRadius: theme.borderRadius.md,
  boxShadow: `${theme.shadows.sm}`,
  fontWeight: theme.fontWeights.semibold,
  cursor: 'pointer',
  textDecoration: 'none',
  textAlign: 'center',
  border: `${theme.borderWidths.sm} solid ${theme.colors.primary}`,
  margin: theme.margin[2],
  padding: `${theme.padding[3]} ${theme.padding[4]}`
}));

export default PrimaryButton;
