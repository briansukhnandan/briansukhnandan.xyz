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
      mediaRoot: "images/blog",
      publicFolder: "public"
    }
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
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Published date",
            required: true,
            ui: {
              dateFormat: "YYYY-MM-DD",
              timeFormat: false
            }
          },
          {
            type: "image",
            name: "images",
            label: "Photos",
            list: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post",
            isBody: true,
            required: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
