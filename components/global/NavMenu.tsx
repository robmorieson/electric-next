import { Flex } from "rebass";

import navItems from "data/navItems";
import NavMenuItem from "./NavMenuItem";

type Props = {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
};

const NavMenu = ({ navOpen, setNavOpen }: Props) => {
  return (
    <Flex
      as="ul"
      sx={{
        "@media screen and (max-width: 768px)": {
          position: "fixed",
          zIndex: 20,
          left: 0,
          top: 0,
          width: "100%",
          height: "100vh",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          background: "var(--color-bg-primary)",
          transition: "opacity .5s ease-in-out",
          opacity: navOpen ? 1 : 0,
          transform: navOpen
            ? "translate3d(0, 0, 0)"
            : "translate3d(100%, 0, 0)",
        },
      }}
    >
      {navItems.map((navItem, i) => (
        <NavMenuItem
          key={i}
          navOpen={navOpen}
          navItem={navItem}
          setNavOpen={setNavOpen}
        />
      ))}
    </Flex>
  );
};

export default NavMenu;
