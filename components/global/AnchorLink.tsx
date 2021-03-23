import { useInView } from "react-intersection-observer";
import { Box, BoxProps } from "rebass";

import TextLink from "components/global/TextLink";

interface Props extends BoxProps {
  text: string;
  href: string;
}

const AnchorLink = ({ text, href, as = "div", sx = {}, ...props }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
  });

  return (
    <Box
      as={as}
      ref={ref}
      sx={{
        position: "relative",
        textTransform: "uppercase",
        fontFamily: "var(--font-secondary)",
        fontWeight: "var(--font-secondary-weight-std)",
        fontSize: "1rem",
        svg: {
          position: "relative",
          transform: "translate3d(5px, 60%, 0)",
          path: {
            stroke: "var(--color-text-primary)",
          },
          ".tail": {
            transition: "stroke-dashoffset .5s linear 1s",
            strokeDasharray: "31.95920181274414 31.95920181274414",
            strokeDashoffset: inView ? 0 : "31.95920181274414",
          },
          ".point": {
            transition: "stroke-dashoffset .5s linear 1.65s",
            strokeDasharray: "15.81138801574707 15.81138801574707",
            strokeDashoffset: inView ? 0 : "15.81138801574707",
          },
        },
        ...sx,
      }}
      {...props}
    >
      <TextLink href={href}>{text}</TextLink>
      <svg
        aria-hidden="true"
        focusable="false"
        width="23"
        height="24"
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="tail"
          d="M0.5 1.49999C6.83333 0.999993 19.2 4.59999 18 23"
        />
        <path className="point" d="M13.5 16.5L18 23L22.5 16.5" />
      </svg>
    </Box>
  );
};

export default AnchorLink;
