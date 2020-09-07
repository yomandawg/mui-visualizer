import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StoreProvider from 'StoreProvider';
import ThemeProvider from 'ThemeProvider';

import { Header, Body, Footer } from 'components';

export default function App() {
  return (
    <>
      <StoreProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Header />
            <Route path="/">
              <Body />
            </Route>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}
