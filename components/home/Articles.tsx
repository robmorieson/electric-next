import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { Flex, Box } from "rebass";

import ArticleType from "types/article";

import { ContentNarrow } from "components/global/Wrappers";
import AnchorLink from "components/global/AnchorLink";
import { HeadingText, BodyText } from "components/global/TextStyles";
import TextLink from "components/global/TextLink";

type Props = {
  articles: ArticleType[];
};

const Articles = ({ articles }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.5,
  });

  useEffect(() => {
    inView ? fadeIn() : fadeOut();
  }, [inView]);

  const fadeIn = () => {
    gsap.to(".articles-fade-in", {
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
    gsap.to(".articles-fade-in", {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power4.out",
    });
  };

  return (
    <Flex
      as="section"
      id="articles"
      sx={{
        minHeight: "100vh",
        alignItems: "center",
        py: "100px",
      }}
    >
      <ContentNarrow>
        <div ref={ref}>
          <HeadingText.H2 className="articles-fade-in">Articles</HeadingText.H2>
          <ul>
            {articles.map((article, i) => (
              <Box key={i} as="li" className="articles-fade-in" mb="var(--s6)">
                <Flex sx={{ fontFamily: "var(--font-monospaced)" }}>
                  <Box
                    as="time"
                    dateTime={article.date}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    {article.date}
                  </Box>
                </Flex>
                <HeadingText.H3 mb="var(--s1)">
                  <TextLink href={`articles/${article.slug}`}>
                    {article.title}
                  </TextLink>
                </HeadingText.H3>
                <BodyText.P sx={{ mb: "var(--s2)" }}>
                  {article.description}
                </BodyText.P>
                <Box as="ul" ml="-5px">
                  {article.keywords.map((keyword, i) => (
                    <Box
                      as="li"
                      key={i}
                      sx={{
                        display: "inline-block",
                        px: "5px",
                        mx: "5px",
                        mb: "10px",
                        fontSize: [".75rem", "1rem"],
                        fontFamily: "var(--font-monospaced)",
                        background: "var(--color-bg-inline-code)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {keyword}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </ul>
          <AnchorLink className="articles-fade-in" text="About" href="#about" />
        </div>
      </ContentNarrow>
    </Flex>
  );
};

export default Articles;
