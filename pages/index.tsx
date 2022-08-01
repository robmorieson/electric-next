import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";

import { articleFilePaths, ARTICLES_PATH } from "utils/mdxUtils";
import ArticleType from "types/article";

import { Layout } from "components/global/Wrappers";
import Intro from "components/home/Intro";
import Articles from "components/home/Articles";
import About from "components/home/About";
import Contact from "components/home/Contact";

type Props = {
  articles: ArticleType[];
};

const Home = ({ articles }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Electric Animals | Rob Morieson</title>
        <meta
          name="description"
          content="Rob Morieson, a web developer based in Melbourne, Australia, with a passion for learning, teaching and mentoring."
        />
      </Head>
      <Intro />
      <Articles articles={articles} />
      <About />
      <Contact />
    </Layout>
  );
};

export default Home;

export function getStaticProps() {
  const articles = articleFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(ARTICLES_PATH, filePath));
      const { data } = matter(source);
      return {
        ...data,
      };
    })
    .sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any));
  return { props: { articles } };
}
