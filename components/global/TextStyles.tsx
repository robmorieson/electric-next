import { Text, TextProps } from "rebass";

export const HeadingText = {
  H1: ({ sx = {}, children, ...props }: TextProps) => (
    <Text
      as="h1"
      sx={{
        textTransform: "uppercase",
        fontFamily: "var(--font-secondary)",
        fontWeight: "var(--font-secondary-weight-std)",
        fontSize: ["2.5rem", "2.85rem"],
        lineHeight: ["1.25"],
        mb: "var(--s3)",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Text>
  ),
  H2: ({ sx = {}, children, ...props }: TextProps) => (
    <Text
      as="h2"
      sx={{
        textTransform: "uppercase",
        fontFamily: "var(--font-secondary)",
        fontWeight: "var(--font-secondary-weight-std)",
        fontSize: "1.25rem",
        mb: "var(--s3)",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Text>
  ),
  H3: ({ sx = {}, children, ...props }: TextProps) => (
    <Text
      as="h3"
      sx={{
        fontFamily: "var(--font-secondary)",
        fontWeight: "var(--font-secondary-weight-std)",
        fontSize: ["1.5rem", "1.75rem"],
        ...sx,
      }}
      {...props}
    >
      {children}
    </Text>
  ),
};

export const BodyText = {
  P: ({ sx = {}, children, ...props }: TextProps) => (
    <Text
      as="p"
      sx={{
        fontSize: ["1.15rem", "1.25rem"],
        mb: "var(--s3)",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Text>
  ),
  CODE: ({ sx = {}, children, ...props }: TextProps) => (
    <Text
      as="code"
      sx={{
        px: "4px",
        fontFamily: "var(--font-monospaced)",
        background: "var(--color-bg-inline-code)",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Text>
  ),
  UL: ({ sx = {}, children, ...props }: TextProps) => (
    <Text
      as="ul"
      sx={{
        listStyle: "disc",
        fontSize: ["1.15rem", "1.25rem"],
        mb: "var(--s3)",
        pl: "var(--s2)",
        "li:not(:last-child)": {
          pb: "var(--s1)",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Text>
  ),
};
