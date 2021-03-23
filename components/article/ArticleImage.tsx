import Image from "next/image";
import { Flex } from "rebass";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

const ArticleImage = ({ src, alt, width, height, caption }: Props) => {
  return (
    <Flex
      as="figure"
      sx={{
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: width,
        mx: "auto",
        mb: "var(--s3)",
        textAlign: "center",
        "> div": {
          boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.42)",
        },
        figcaption: {
          mt: "var(--s2)",
          color: "var(--color-text-secondary)",
        },
      }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
      {caption && <figcaption>{caption}</figcaption>}
    </Flex>
  );
};

export default ArticleImage;
