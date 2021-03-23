import Link from "next/link";
import { Link as RebassLink, LinkProps, SxStyleProp } from "rebass";

interface Props extends LinkProps {
  href: string;
}

const baseLinkStyles: SxStyleProp = {
  position: "relative",
  color: "var(--color-text-highlight)",
  transition: "color 0.35s ease-in-out",
  borderBottom: "1px solid var(--color-text-highlight)",
  "&:hover": {
    color: "var(--color-text-primary)",
  },
};

const TextLink = ({ href, sx = {}, children, ...props }: Props) => (
  <>
    {href.includes("http") || href.includes("mailto") ? (
      <RebassLink
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        sx={{ ...baseLinkStyles, ...sx }}
        {...props}
      >
        {children}
      </RebassLink>
    ) : (
      <Link href={href} passHref>
        <RebassLink sx={{ ...baseLinkStyles, ...sx }} {...props}>
          {children}
        </RebassLink>
      </Link>
    )}
  </>
);

export default TextLink;
