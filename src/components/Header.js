import React from 'react';
import { useTheme } from '@material-ui/core/styles';

export default function Body() {
  const theme = useTheme();
  return (
    <header style={{ backgroundColor: theme.palette.background.default }}>
      HEADER
    </header>
  );
}
