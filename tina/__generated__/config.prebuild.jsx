// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH ?? process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ?? "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? null,
  token: process.env.TINA_TOKEN ?? null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Brian's blog posts",
        path: "content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "date",
            label: "Published date",
            required: true,
            ui: {
              component: "date"
            }
          },
          {
            type: "image",
            name: "images",
            label: "Photos",
            list: true,
            uploadDir: () => "blog"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post",
            isBody: true,
            required: true
          }
        ]
      },
      {
        name: "home",
        label: "Home page",
        path: "content/home",
        format: "json",
        fields: [
          {
            type: "image",
            name: "carouselImages",
            label: "Carousel images",
            description: "Add, remove, or drag images to set the carousel order.",
            list: true,
            uploadDir: () => "carousel"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
