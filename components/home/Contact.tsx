import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { Flex, Box } from "rebass";

import { ContentNarrow } from "components/global/Wrappers";
import { HeadingText, BodyText } from "components/global/TextStyles";
import TextLink from "components/global/TextLink";
import Peace from "components/global/svg/Peace";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.5,
  });

  useEffect(() => {
    inView ? fadeIn() : fadeOut();
  }, [inView]);

  const fadeIn = () => {
    gsap.to(".contact-fade-in", {
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
    gsap.to(".contact-fade-in", {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power4.out",
    });
  };

  return (
    <Flex
      as="section"
      id="contact"
      sx={{
        minHeight: "calc(100vh - 220px)",
        alignItems: "center",
        py: "100px",
      }}
    >
      <ContentNarrow>
        <div ref={ref}>
          <HeadingText.H2 className="contact-fade-in">Contact</HeadingText.H2>
          <BodyText.P className="contact-fade-in">
            If you'd like to get in touch, please feel free to drop me an{" "}
            <TextLink href="mailto:rob@electricanimals.com">email</TextLink>
          </BodyText.P>
          <BodyText.P className="contact-fade-in">
            Otherwise, you can follow my random thoughts on{" "}
            <TextLink href="https://twitter.com/robmorieson">Twitter</TextLink>
          </BodyText.P>
          <Box
            className="contact-fade-in"
            sx={{
              mt: "var(--s3)",
              svg: {
                width: ["50px", "100px"],
                height: "auto",
                path: {
                  stroke: "var(--color-text-primary)",
                  transition: "stroke-dashoffset 2.5s linear 1.5s",
                  strokeDasharray: "1688.553466796875 1688.553466796875",
                  strokeDashoffset: inView ? 0 : "1688.553466796875",
                },
              },
            }}
          >
            <Peace />
          </Box>
        </div>
      </ContentNarrow>
    </Flex>
  );
};

export default Contact;
