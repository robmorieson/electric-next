import Link from "next/link";
import { Box, Link as RebassLink } from "rebass";

import NavItemType from "types/navItem";

type Props = {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
  navItem: NavItemType;
};

const NavMenuItem = ({ navOpen, setNavOpen, navItem }: Props) => (
  <Box
    as="li"
    sx={{
      px: "var(--s1)",
      fontFamily: "var(--font-secondary)",
      fontWeight: "var(--font-secondary-weight-std)",
      textTransform: "uppercase",
      "@media screen and (max-width: 768px)": {
        fontSize: "1.5rem",
        py: "calc(var(--s3) / 2)",
        transition:
          "opacity .5s ease-in-out .35s, transform .5s ease-in-out .35s",
        opacity: navOpen ? 1 : 0,
        transform: navOpen ? "translate3d(0, 0, 0)" : "translate3d(-50%, 0, 0)",
        a: {
          display: navOpen ? "inline-block" : "none",
        },
      },
    }}
  >
    <Link href={navItem.href} passHref>
      <RebassLink
        onClick={() => setNavOpen(false)}
        sx={{
          color: "var(--color-text-primary)",
          textDecoration: "none",
        }}
      >
        {navItem.text}
      </RebassLink>
    </Link>
  </Box>
);

export default NavMenuItem;
