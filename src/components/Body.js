import React from 'react';
import PaletteComponent from './PaletteComponent';
import CreateFabs from './CreateFabs';
import { useTheme } from '@material-ui/core/styles';

export default function Body() {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <PaletteComponent />
      <CreateFabs />
    </div>
  );
}
