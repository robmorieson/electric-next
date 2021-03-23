import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { Flex, Box } from "rebass";

import clients from "data/clients";

import { ContentNarrow } from "components/global/Wrappers";
import { HeadingText, BodyText } from "components/global/TextStyles";
import TextLink from "components/global/TextLink";
import AnchorLink from "components/global/AnchorLink";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.5,
  });

  useEffect(() => {
    inView ? fadeIn() : fadeOut();
  }, [inView]);

  const fadeIn = () => {
    gsap.to(".projects-fade-in", {
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
    gsap.to(".projects-fade-in", {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power4.out",
    });
  };

  return (
    <Flex
      as="section"
      id="projects"
      sx={{
        minHeight: "100vh",
        alignItems: "center",
        py: "100px",
      }}
    >
      <ContentNarrow>
        <div ref={ref}>
          <HeadingText.H2 className="projects-fade-in">Projects</HeadingText.H2>
          <BodyText.P className="projects-fade-in">
            Following are a selection of projects that I managed or contributed
            to during my time working with Prime Motive.
          </BodyText.P>
          <Box as="ul" sx={{ mb: "var(--s3)" }}>
            {clients.map((client, i) => (
              <Box
                key={i}
                className="projects-fade-in"
                as="li"
                sx={{
                  mb: ["var(--s2)", "var(--s3)"],
                }}
              >
                <HeadingText.H3 mb="var(--s0)">{`${client.name}`}</HeadingText.H3>
                <Box as="ul" sx={{ mb: "var(--s3)" }}>
                  {client.projects.map((project, i) => (
                    <Box key={i} as="li" sx={{ mb: "var(--s0)" }}>
                      <Box
                        as="span"
                        sx={{ display: ["none", "inline"] }}
                      >{`» `}</Box>
                      <Box as="span">
                        <TextLink href={project.url}>{project.text}</TextLink>
                      </Box>
                      <Box
                        as="span"
                        sx={{
                          display: ["block", "inline"],
                        }}
                      >{` [${project.technologies}]`}</Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
          <BodyText.P className="projects-fade-in">
            These projects are just a taste of my output over the years. Please
            get in touch if you would like to discuss my previous endeavours in
            more detail.
          </BodyText.P>
          <AnchorLink
            className="projects-fade-in"
            text="Experience"
            href="#experience"
          />
        </div>
      </ContentNarrow>
    </Flex>
  );
};

export default Projects;
