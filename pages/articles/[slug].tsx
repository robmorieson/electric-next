import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { GetStaticProps } from "next";
import Head from "next/head";
import path from "path";
import { format } from "date-fns";
import { Box, Text } from "rebass";

import { articleFilePaths, ARTICLES_PATH } from "../../utils/mdxUtils";
import ArticleType from "types/article";

import { Layout, ContentWide } from "components/global/Wrappers";
import CodeBlock from "components/article/CodeBlock";
import Callout from "components/article/Callout";
import Video from "components/article/Video";
import ArticleImage from "components/article/ArticleImage";
import ArticleText from "components/article/ArticleText";
import Spacer from "components/global/Spacer";
import { BodyText, HeadingText } from "components/global/TextStyles";
import TextLink from "components/global/TextLink";

const components = {
  a: TextLink,
  h3: ArticleText.H3,
  p: BodyText.P,
  code: CodeBlock,
  inlineCode: BodyText.CODE,
  blockquote: Callout,
  Image: ArticleImage,
  Video,
  Spacer,
};

type Source = {
  compiledSource: string;
  renderedOutput: string;
  scope: ArticleType;
};

type Props = {
  source: Source;
  frontMatter: ArticleType;
};

export default function PostPage({ source, frontMatter }: Props) {
  const content = hydrate(source, { components });
  return (
    <Layout>
      <Head>
        <title>{`${frontMatter.title} | Electric Animals`}</title>
        <meta name="description" content={frontMatter.description} />
        <meta name="image" content={frontMatter.image} />
        <meta
          property="og:url"
          content={`https://electricanimals.com/articles/${frontMatter.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.description} />
        <meta property="og:image" content={frontMatter.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://electricanimals.com/" />
        <meta name="twitter:creator" content="@robmorieson" />
        <meta name="twitter:title" content={frontMatter.title} />
        <meta name="twitter:description" content={frontMatter.description} />
        <meta name="twitter:image" content={frontMatter.image} />
      </Head>
      <ContentWide sx={{ pt: "100px", pb: "160px" }}>
        <article itemScope itemType="https://schema.org/Article">
          <Box
            as="header"
            sx={{
              mb: "var(--s6)",
              pb: "var(--s1)",
              borderBottom: "1px solid var(--color-border-primary)",
            }}
          >
            <HeadingText.H1 itemProp="headline">
              {frontMatter.title}
            </HeadingText.H1>
            {frontMatter.description && (
              <Text
                as="h2"
                sx={{
                  mb: "var(--s3)",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  color: "var(--color-text-secondary)",
                }}
              >
                {frontMatter.description}
              </Text>
            )}
            <Box
              sx={{
                fontFamily: "var(--font-monospaced)",
                fontSize: [".85rem", "1rem"],
              }}
            >
              {`Posted `}
              <Box
                as="time"
                dateTime={frontMatter.date}
                itemProp="dateCreated pubdate datePublished"
                sx={{ whiteSpace: "nowrap" }}
              >
                {format(new Date(frontMatter.date), "do MMMM y")}
              </Box>
              {` by `}
              <span itemProp="author">{frontMatter.author}</span>
            </Box>
          </Box>
          <section itemProp="articleBody">{content}</section>
        </article>
      </ContentWide>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articleFilePaths = path.join(ARTICLES_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(articleFilePaths);
  const { content, data } = matter(source);
  const mdxSource = await renderToString(content, {
    components,
    // mdxOptions: {
    //   remarkPlugins: [],
    //   rehypePlugins: [],
    // },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = articleFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
