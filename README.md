# My Personal Website
- Run with `npm run dev` after running `npm ci`.
- This site is deployed with Vercel.
- In the case that the domain for this website expires, the backup URL is: `briansukhnandan-r520ufr3i-brian-sukhnandans-projects.vercel.app`.

## Motivation
- I wanted a site a little more minimalistic. I felt my last personal website had a lot going on, not to mention the code itself was starting to get unmaintainable because it was developed when i was beginning to learn HTML/CSS/JS fully.
- My site is inspired slightly by Luke Smith (lukesmith.xyz), however I strive to have a little more "bloat" to my website than some would like.

## Adding a Writing

Writings live in `content/blog/` as Markdown files and are managed through TinaCMS.

### Publish a writing

1. Visit `/admin` on the deployed site and sign in with the TinaCloud account authorized for this project.
2. Create or edit a writing, add its date, write its body, and upload any photos.
3. Save the writing. TinaCloud commits the change directly to `main`.
4. Vercel detects that commit and deploys the published writing.

Photos uploaded from Tina are stored in `public/images/blog/` and published with the writing.

## Managing carousel images

1. Visit `/admin` and open **Home page**.
2. Use **Carousel images** to add, remove, or drag images into the desired order.
3. Save the document. TinaCloud commits the updated `content/home/index.json` file and Vercel deploys it.

Carousel uploads are stored in `public/images/carousel/`; blog uploads remain in `public/images/blog/`.

### Local setup

Copy `.env.example` to `.env` and set `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` from the TinaCloud project.

`npm run dev` starts a local Tina editor and the site. The local TinaCMS instance will just write a file locally instead of publishing a commit to the repo.
