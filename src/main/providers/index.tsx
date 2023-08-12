import React, { ReactNode } from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  width: {
    standard: '1280px',
    margin: '0 auto',
  },
};

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
