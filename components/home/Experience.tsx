import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { Box, Flex } from "rebass";

import experiences from "data/experiences";

import { ContentNarrow } from "components/global/Wrappers";
import { HeadingText, BodyText } from "components/global/TextStyles";
import TextLink from "components/global/TextLink";
import AnchorLink from "components/global/AnchorLink";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.5,
  });

  useEffect(() => {
    inView ? fadeIn() : fadeOut();
  }, [inView]);

  const fadeIn = () => {
    gsap.to(".experience-fade-in", {
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
    gsap.to(".experience-fade-in", {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power4.out",
    });
  };

  return (
    <Flex
      as="section"
      id="experience"
      sx={{
        minHeight: "100vh",
        alignItems: "center",
        py: "100px",
      }}
    >
      <ContentNarrow>
        <div ref={ref}>
          <HeadingText.H2 className="experience-fade-in">
            Select experience
          </HeadingText.H2>
          {experiences.map((experience, i) => (
            <dl key={i}>
              <Box
                as="dt"
                className="experience-fade-in"
                sx={{
                  mb: ["var(--s1)", 0],
                }}
              >
                <Box
                  className="experience-fade-in"
                  sx={{
                    fontFamily: "var(--font-monospaced)",
                    fontSize: ".85rem",
                    textTransform: "uppercase",
                    color: "var(--color-text-secondary)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {experience.date}
                </Box>
                <HeadingText.H3
                  className="experience-fade-in"
                  sx={{
                    lineHeight: 1,
                    mt: "var(--s1)",
                    mb: "var(--s2)",
                  }}
                >
                  <div>{experience.role}</div>
                  <TextLink
                    href={experience.company.url}
                    sx={{
                      textTransform: "uppercase",
                      fontSize: "1rem",
                    }}
                  >
                    {experience.company.name}
                  </TextLink>
                </HeadingText.H3>
              </Box>
              <Box
                as="dd"
                className="experience-fade-in"
                sx={{
                  mb: "calc(var(--s3) * 1.5)",
                }}
              >
                <BodyText.P
                  className="experience-fade-in"
                  dangerouslySetInnerHTML={{
                    __html: experience.summary.replace(
                      /\[i\]([\s\S]+?)\[\/i\]/gm,
                      `<i>$1</i>`
                    ),
                  }}
                />
              </Box>
            </dl>
          ))}
          <div className="experience-fade-in">
            <AnchorLink text="Get in touch" href="#contact" />
          </div>
        </div>
      </ContentNarrow>
    </Flex>
  );
};

export default Experience;
