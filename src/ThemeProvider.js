import React from 'react';
import { connect } from 'react-redux';
import {
  responsiveFontSizes,
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { getPalette } from 'helpers/theme';

function ThemeProviderComponent({ children, palette }) {
  const $palette = getPalette(palette);

  const $theme = React.useMemo(
    () =>
      responsiveFontSizes(
        createMuiTheme({
          palette: $palette,
        })
      ),
    [$palette]
  );

  return (
    <MuiThemeProvider theme={$theme}>
      <ThemeProvider theme={$theme}>{children}</ThemeProvider>
    </MuiThemeProvider>
  );
}

function mapStateToProps(state) {
  return {
    palette: state.palette,
  };
}

export default connect(mapStateToProps)(ThemeProviderComponent);
