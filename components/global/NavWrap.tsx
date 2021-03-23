import { useState } from "react";
import { Flex } from "rebass";

import NavButton from "./NavButton";
import NavMenu from "./NavMenu";

const NavWrap = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Flex
      as="nav"
      aria-labelledby="primary-navigation"
      sx={{
        order: [3, 0],
        flex: ["inherit", "1 0 auto"],
        justifyContent: "flex-end",
        mr: [0, "var(--s4)"],
        ml: ["var(--s2)", 0],
      }}
    >
      <h2 id="primary-navigation" className="sr-only">
        Primary navigation
      </h2>
      <NavButton navOpen={navOpen} setNavOpen={setNavOpen} />
      <NavMenu navOpen={navOpen} setNavOpen={setNavOpen} />
    </Flex>
  );
};

export default NavWrap;
