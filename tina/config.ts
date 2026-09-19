import { defineConfig } from "tinacms";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ??
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ??
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? null,
  token: process.env.TINA_TOKEN ?? null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images/blog",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Railway blog posts",
        path: "content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "date",
            label: "Published date",
            required: true,
            ui: {
              component: "date",
            },
          },
          {
            type: "image",
            name: "images",
            label: "Photos",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post",
            isBody: true,
            required: true,
          },
        ],
      },
    ],
  },
});
