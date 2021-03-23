import { useState, useEffect } from "react";
import { Box } from "rebass";

import Moon from "components/global/svg/Moon";
import Sun from "components/global/svg/Sun";

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState(document.body.dataset.theme);

  const inactiveTheme = currentTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = currentTheme;
    currentTheme && window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <Box
      as="button"
      type="button"
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      onClick={() => setCurrentTheme(inactiveTheme)}
      sx={{
        "--toggle-width": "56px",
        "--toggle-height": "28px",
        "--toggle-padding": "3px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "var(--toggle-width)",
        height: "var(--toggle-height)",
        ml: "auto",
        padding: "var(--toggle-padding)",
        border: 0,
        borderRadius: "calc(var(--toggle-width) / 2)",
        cursor: "pointer",
        background: "var(--color-bg-toggle)",
        transition:
          "background 0.25s ease-in-out, box-shadow 0.25s ease-in-out",
        "&:focus": {
          outlineOffset: "5px",
        },
        "&:focus:not(:focus-visible)": {
          outline: "none",
        },
        "&:hover": {
          boxShadow: "0 0 5px 2px var(--color-bg-toggle)",
        },
        svg: {
          width: "auto",
          height: "100%",
          py: "2px",
          "&.svg-moon": { py: "4px" },
        },
      }}
    >
      <Box
        as="span"
        sx={{
          position: "absolute",
          top: "var(--toggle-padding)",
          left: "var(--toggle-padding)",
          width: "calc(var(--toggle-height) - (var(--toggle-padding) * 2))",
          height: "calc(var(--toggle-height) - (var(--toggle-padding) * 2))",
          borderRadius: "50%",
          background: "white",
          transition: "transform 0.25s ease-in-out",
          transform:
            currentTheme === "dark"
              ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
              : "none",
        }}
      />
      <Sun />
      <Moon />
    </Box>
  );
};

export default ThemeToggle;
