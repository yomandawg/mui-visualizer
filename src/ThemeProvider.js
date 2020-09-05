import React from 'react';
import { connect } from 'react-redux';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

function ThemeProviderComponent({ children, theme }) {
  const $theme = React.useMemo(
    () =>
      responsiveFontSizes(
        createMuiTheme({
          palette: {
            type: theme,
          },
        })
      ),
    [theme]
  );

  return (
    <MuiThemeProvider theme={$theme}>
      <ThemeProvider theme={$theme}>{children}</ThemeProvider>
    </MuiThemeProvider>
  );
}

function mapStateToProps(state) {
  return {
    theme: state.theme,
  };
}

export default connect(mapStateToProps)(ThemeProviderComponent);
