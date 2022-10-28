import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { CustomTheme } from './theme/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './views/Users';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path={''} element={<Users />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
