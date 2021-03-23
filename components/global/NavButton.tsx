import { Box } from "rebass";

type Props = {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
};

const NavButton = ({ navOpen, setNavOpen }: Props) => {
  return (
    <Box
      as="button"
      type="button"
      aria-label={navOpen ? "Close navigation" : "Open navigation"}
      title={navOpen ? "Close navigation" : "Open navigation"}
      sx={{
        "--nav-button-width": "30px",
        "--nav-button-stroke": "4px",
        display: ["block", "none"],
        zIndex: 30,
        width: "var(--nav-button-width)",
        height: "var(--nav-button-width)",
        padding: 0,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        transition: "transform .25s ease-in-out",
        transform: navOpen ? "rotate(-45deg)" : "",
        "&:focus": {
          outlineOffset: "5px",
        },
        "&:focus:not(:focus-visible)": {
          outline: "none",
        },
        span: {
          display: "block",
          width: navOpen ? "var(--nav-button-stroke)" : "100%",
          height: navOpen
            ? "calc((var(--nav-button-width) / 2) - (var(--nav-button-stroke) / 2))"
            : "var(--nav-button-stroke)",
          ml: navOpen
            ? "calc((var(--nav-button-width) / 2) - (var(--nav-button-stroke) / 2))"
            : 0,
          borderRadius: "calc(var(--nav-button-stroke))",
          background: "var(--color-text-secondary)",
          transition: "all .25s ease-in-out",
          "&.mid": {
            width: "100%",
            height: "var(--nav-button-stroke)",
            m: navOpen ? "0" : "6px 0",
          },
        },
      }}
      onClick={() => setNavOpen(!navOpen)}
    >
      <span className="top" />
      <span className="mid" />
      <span className="btm" />
    </Box>
  );
};

export default NavButton;
