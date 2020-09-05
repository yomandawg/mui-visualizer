import React from 'react';
import { connect } from 'react-redux';
import {
  responsiveFontSizes,
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import * as themeColors from 'theme/colors';
import * as themeTypographys from 'theme/typographys';

function ThemeProviderComponent({ children, theme: { color, typography } }) {
  const $theme = React.useMemo(
    () =>
      responsiveFontSizes(
        createMuiTheme({
          palette: themeColors[color],
          typography: themeTypographys[typography],
        })
      ),
    [color, typography]
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
