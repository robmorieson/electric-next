import { Flex, Text } from "rebass";

import { ContentWide } from "components/global/Wrappers";
import AnchorLink from "components/global/AnchorLink";

const Intro = () => {
  return (
    <Flex
      as="section"
      id="intro"
      sx={{
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <ContentWide>
        <Text
          as="h1"
          sx={{
            display: ["block", "inline"],
            fontSize: ["1.5rem", "1.75rem", "2.75rem"],
            fontWeight: "400",
            pr: "var(--s1)",
            mb: ["var(--s3)", 0],
          }}
        >
          Hi, I'm Rob Morieson, a frontend developer based in Melbourne,
          Australia, focusing on accessibility, performance and outstanding UX.{" "}
          <br />
          <br />I am committed to creating online experiences that are
          accessible by everyone.
        </Text>
        <AnchorLink as="span" text="Read more" href="#articles" />
      </ContentWide>
    </Flex>
  );
};

export default Intro;
