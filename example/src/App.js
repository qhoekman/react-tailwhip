import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import React, { Component } from 'react';

import PrimaryButton from './components/primary-button';
import { SecondaryButton } from './components/secondary-button';
import { TeriaryButton } from './components/teriary-button';
import { Theme } from './theme';

const Layout = styled('div')(({ theme }) => ({
  fontFamily: theme.fonts.sans
}));

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Layout>
          <PrimaryButton>Click me!</PrimaryButton>
          <SecondaryButton>Click me also!</SecondaryButton>
          <TeriaryButton>Click me please!</TeriaryButton>
        </Layout>
      </ThemeProvider>
    );
  }
}
