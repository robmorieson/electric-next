import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { Flex, Box } from "rebass";

import { ContentNarrow } from "components/global/Wrappers";
import TextLink from "components/global/TextLink";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.5,
  });

  useEffect(() => {
    inView ? fadeIn() : fadeOut();
  }, [inView]);

  const fadeIn = () => {
    gsap.to(".footer-fade-in", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 1,
      },
    });
  };

  const fadeOut = () => {
    gsap.to(".footer-fade-in", {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power4.out",
    });
  };

  return (
    <footer>
      <Box
        ref={ref}
        className={inView ? "in-view" : ""}
        sx={{
          position: "relative",
          overflow: "hidden",
          pt: "var(--s3)",
          fontSize: [".85rem", "1rem"],
          textAlign: "center",
          "&:before": {
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "1px",
            background: "var(--color-text-primary)",
            transformOrigin: "50% 100%",
            transition:
              "clip-path 1s, transform 1s cubic-bezier(0.2, 1, 0.8, 1)",
            clipPath:
              "polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)",
          },
          "&.in-view": {
            "&:before": {
              transform: "translate3d(0, 1px, 0) scale3d(1.08, 1, 1)",
              clipPath:
                "polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%)",
            },
          },
        }}
      >
        <ContentNarrow>
          <Flex
            as="ul"
            className="footer-fade-in"
            sx={{
              justifyContent: "center",
              mb: "var(--s3)",
              li: {
                px: "var(--s1)",
              },
            }}
          >
            <li>
              <TextLink href="https://github.com/robmorieson">GitHub</TextLink>
            </li>
            <li>
              <TextLink href="https://www.linkedin.com/in/rob-morieson-25612238/">
                Linkedin
              </TextLink>
            </li>
            <li>
              <TextLink href="https://twitter.com/robmorieson">
                Twitter
              </TextLink>
            </li>
          </Flex>
          <Box className="footer-fade-in" mb="var(--s3)">
            Site built using{" "}
            <TextLink href="https://nextjs.org/">Next.js</TextLink> and hosted
            on <TextLink href="https://vercel.com/">Vercel</TextLink>
          </Box>
          <Box
            as="small"
            className="footer-fade-in"
            sx={{ display: "block", mb: "var(--s3)" }}
          >
            Copyright © 2021 Rob Morieson | Electric Animals
          </Box>
        </ContentNarrow>
      </Box>
    </footer>
  );
};

export default Footer;
