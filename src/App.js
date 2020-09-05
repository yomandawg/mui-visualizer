import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StoreProvider from 'StoreProvider';
import ThemeProvider from 'ThemeProvider';

import { ToggleTheme } from 'components';
import CreateFabs from 'components/CreateFabs';

export default function App() {
  return (
    <>
      <StoreProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Route path="/" exact component={ToggleTheme} />
          </BrowserRouter>
          <CreateFabs />
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}
