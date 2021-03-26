import { useState, useEffect } from "react";
import FocusTrap from "focus-trap-react";
import { Flex } from "rebass";

import NavButton from "./NavButton";
import NavMenu from "./NavMenu";

const NavWrap = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleEsc = (e: KeyboardEvent) => {
    e.key === "Escape" && setNavOpen(false);
  };

  useEffect(() => {
    navOpen && document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [navOpen]);

  return (
    <FocusTrap
      active={navOpen}
      focusTrapOptions={{
        returnFocusOnDeactivate: false,
      }}
    >
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
    </FocusTrap>
  );
};

export default NavWrap;
