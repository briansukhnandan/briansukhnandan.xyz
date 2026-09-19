import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import type { BlogPost } from "@/app/blog/types";

const postsDirectory = path.join(process.cwd(), "content", "blog");

type BlogFrontmatter = {
  title?: unknown;
  date?: unknown;
  images?: unknown;
};

const asString = (value: unknown, field: string, filename: string) => {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Blog post ${filename} must have a ${field}.`);
  }

  return value;
};

const asDate = (value: unknown, filename: string) => {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  return asString(value, "date", filename).slice(0, 10);
};

const asImages = (value: unknown, filename: string) => {
  if (value === undefined) {
    return [];
  }

  if (!Array.isArray(value) || value.some((image) => typeof image !== "string")) {
    throw new Error(`Blog post ${filename} has invalid images.`);
  }

  return value;
};

export const getBlogPosts = (): BlogPost[] => {
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"));

  return filenames
    .map((filename) => {
      const source = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
      const { data, content } = matter(source);
      const frontmatter = data as BlogFrontmatter;

      return {
        slug: filename.replace(/\.md$/, ""),
        title: asString(frontmatter.title, "title", filename),
        date: asDate(frontmatter.date, filename),
        body: content.trim(),
        images: asImages(frontmatter.images, filename),
      };
    })
    .sort((first, second) => second.date.localeCompare(first.date));
};
