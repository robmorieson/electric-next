import { Text, TextProps } from "rebass";

const ArticleText = {
  H3: ({ children }: TextProps) => (
    <Text
      as="h3"
      sx={{
        fontFamily: "var(--font-secondary)",
        fontWeight: "var(--font-secondary-weight-std)",
        textTransform: "uppercase",
        fontSize: ["1.5rem", "1.75rem"],
        mb: "var(--s2)",
      }}
    >
      {children}
    </Text>
  ),
};

export default ArticleText;
