import fs from "fs";
import path from "path";

export const ARTICLES_PATH = path.join(process.cwd(), "articles");

export const articleFilePaths = fs
  .readdirSync(ARTICLES_PATH)
  .filter((path) => /\.mdx?$/.test(path));
