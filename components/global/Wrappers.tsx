import React from "react";
import { ThemeProvider } from "emotion-theming";
import Head from "next/head";
import { Box, BoxProps } from "rebass";

import theme from "styles/theme";
import Header from "components/global/Header";
import Footer from "components/global/Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export const ContentWide = ({ sx = {}, children, ...props }: BoxProps) => (
  <Box
    sx={{
      width: "100%",
      maxWidth: "1000px",
      mx: "auto",
      px: ["var(--s2)", "var(--s4)"],
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export const ContentNarrow = ({ sx = {}, children, ...props }: BoxProps) => (
  <Box
    sx={{
      width: "100%",
      maxWidth: "680px",
      mx: "auto",
      px: ["var(--s2)", "var(--s4)"],
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);
