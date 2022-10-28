import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { CustomTheme } from './theme/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './views/Users';
import User from './views/User';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path={''} element={<Users />} />
            <Route path={'/user'} element={<User />} />
            <Route path={'/user/:id'} element={<User />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
