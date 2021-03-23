import dynamic from "next/dynamic";
import { Box } from "rebass";

import { ContentWide } from "components/global/Wrappers";
import Logo from "components/global/Logo";
import NavWrap from "components/global/NavWrap";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});

const Header = () => {
  return (
    <Box
      as="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        width: "100%",
        borderBottom: "1px solid var(--color-border-primary)",
        background: "var(--color-bg-primary)",
        transition: "background 0.5s ease-in-out",
      }}
    >
      <ContentWide
        sx={{
          display: "flex",
          alignItems: "center",
          py: "var(--s1)",
        }}
      >
        <Logo />
        <NavWrap />
        <ThemeToggle />
      </ContentWide>
    </Box>
  );
};

export default Header;
