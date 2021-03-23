import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import oceanicNext from "prism-react-renderer/themes/oceanicNext";
import { Box } from "rebass";

type Props = {
  children: string;
  className: string;
};

const CodeBlock = ({ children, className }: Props) => {
  const language = className.replace(/language-/, "") as Language;
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={oceanicNext}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          as="pre"
          className={className}
          sx={{
            ...style,
            fontSize: [".85rem", "1rem"],
            padding: "20px",
            fontFamily: "var(--font-monospaced)",
            overflowX: "auto",
            marginBottom: "var(--s3)",
          }}
        >
          {tokens.map((line, i) => {
            if (i + 1 === tokens.length) return;
            return (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </Box>
      )}
    </Highlight>
  );
};

export default CodeBlock;
