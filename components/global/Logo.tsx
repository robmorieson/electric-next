import Link from "next/link";
import { Box, Link as RebassLink } from "rebass";

const Logo = () => {
  return (
    <Box
      sx={{
        fontFamily: "var(--font-secondary)",
        fontWeight: "var(--font-secondary-weight-std)",
        fontSize: "1.25rem",
        textTransform: "uppercase",
      }}
    >
      <Link href="/" passHref>
        <RebassLink
          aria-label="Go to homepage"
          sx={{
            color: "var(--color-text-primary)",
            display: "flex",
            alignItems: "center",
          }}
        >
          Rob Morieson
        </RebassLink>
      </Link>
    </Box>
  );
};

export default Logo;
