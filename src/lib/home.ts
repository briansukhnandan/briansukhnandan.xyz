import "server-only";

import fs from "node:fs";
import path from "node:path";

const homeContentPath = path.join(process.cwd(), "content", "home", "index.json");

type HomeContent = {
  carouselImages?: unknown;
};

export const getCarouselImages = (): string[] => {
  const source = fs.readFileSync(homeContentPath, "utf8");
  const content = JSON.parse(source) as HomeContent;

  if (!Array.isArray(content.carouselImages)) {
    throw new Error("Home content must contain a carouselImages list.");
  }

  if (content.carouselImages.some((image) => typeof image !== "string")) {
    throw new Error("Home carousel images must be strings.");
  }

  return content.carouselImages;
};
