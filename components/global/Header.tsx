import dynamic from "next/dynamic";
import { Box } from "rebass";

import { ContentWide } from "components/global/Wrappers";
import Logo from "components/global/Logo";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});

const Header = () => {
  return (
    <Box
      as="header"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        width: "100%",
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
        <ThemeToggle />
      </ContentWide>
    </Box>
  );
};

export default Header;
