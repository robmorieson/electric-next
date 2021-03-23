import { Flex, FlexProps } from "rebass";

const Callout = ({ children }: FlexProps) => {
  return (
    <Flex
      sx={{
        p: ["var(--s2)", "var(--s3)"],
        pb: "0 !important",
        mb: "var(--s3)",
        border: "1px solid var(--color-border-callout)",
        background: "var(--color-bg-callout)",
        "> p": {
          fontSize: ["1rem", "1.15rem"],
          mb: ["var(--s2)", "var(--s3)"],
        },
      }}
    >
      {children}
    </Flex>
  );
};

export default Callout;
