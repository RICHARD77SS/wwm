import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './Hooks/usePersistedState';
import light from './Styles/Themes/light';
import dark from './Styles/Themes/dark';
import GlobalStyle from './Styles/GlobalStyles';
import { createBrowserRouter, RouterProvider, Route, Routes, Link } from 'react-router-dom'
import Navbar from './Components/Navbar';
import router from './routes';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

