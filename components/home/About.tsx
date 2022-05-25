import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { Flex } from "rebass";

import { ContentNarrow } from "components/global/Wrappers";
import AnchorLink from "components/global/AnchorLink";
import { HeadingText, BodyText } from "components/global/TextStyles";
import TextLink, { LinkType } from "components/global/TextLink";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.5,
  });

  useEffect(() => {
    inView ? fadeIn() : fadeOut();
  }, [inView]);

  const fadeIn = () => {
    gsap.to(".about-fade-in", {
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
    gsap.to(".about-fade-in", {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power4.out",
    });
  };

  return (
    <Flex
      as="section"
      id="about"
      sx={{
        minHeight: "100vh",
        alignItems: "center",
        py: "100px",
      }}
    >
      <ContentNarrow>
        <div ref={ref}>
          <HeadingText.H2 className="about-fade-in">
            Skills + interests
          </HeadingText.H2>
          <BodyText.P className="about-fade-in">
            With over 10 years of agency and freelance experience, my skill set
            has a broad range: from the foundational online building blocks of
            HTML, CSS and Javascript, right through to full stack development.
            I'm always sure to harness UX, UI and accessibility thinking as a
            complement to my technical abilities.
          </BodyText.P>
          <BodyText.P className="about-fade-in">
            Leading and mentoring developers has also played an integral role in
            my career and it's something I approach with passion and joy.
          </BodyText.P>
          <BodyText.P className="about-fade-in">
            Current technical interests include React, TypeScript, Prisma,
            GraphQL, Apollo, serverless, testing and headless CMS solutions.
          </BodyText.P>
          <BodyText.P className="about-fade-in">
            Outside of web development I am passionate about music and cycling.
            My days as a DJ and radio host might now be done and dusted, but you
            can follow along with my other two wheeled adventures over on{" "}
            <TextLink
              variation={LinkType.BODY}
              href="https://www.strava.com/athletes/32518448"
            >
              Strava
            </TextLink>
            .
          </BodyText.P>
          <AnchorLink
            className="about-fade-in"
            text="Projects"
            href="#projects"
          />
        </div>
      </ContentNarrow>
    </Flex>
  );
};

export default About;
