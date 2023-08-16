import React, { ReactNode } from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  width: {
    standard: '1280px',
    margin: '0 auto',
    login: '450px',
  },
  colors: {
    primary: '#1E1E1F',
    secondary: '#fff',
    tertiary: '#6550F3',
    quaternary: '#201e1e',
    quinary: '#dedde3',
    senary: '#000',
    septenary: '#7e7e7e',
    octonary: '',
    nonary: '',
    denary: '',
  },
};

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins";
    scroll-behavior: smooth;
  }
  
::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-thumb {
  background-color: #6550F3;
  border-radius: 15px;
  height: 20px;
}
`;

interface ThemeProps {
  children: ReactNode;
}

export const Theme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
