# My Personal Website
- Run with `npm run dev` after running `npm ci`.
- This site is deployed with Vercel.
- In the case that the domain for this website expires, the backup URL is: `briansukhnandan-r520ufr3i-brian-sukhnandans-projects.vercel.app`.

## Motivation
- I wanted a site a little more minimalistic. I felt my last personal website had a lot going on, not to mention the code itself was starting to get unmaintainable because it was developed when i was beginning to learn HTML/CSS/JS fully.
- My site is inspired slightly by Luke Smith (lukesmith.xyz), however I strive to have a little more "bloat" to my website than some would like.

## Adding a Blog Entry

Posts live in `content/blog/` as Markdown files and are managed through TinaCMS.

### Publish a post

1. Visit `/admin` on the deployed site and sign in with the TinaCloud account authorized for this project.
2. Create or edit a post, add its date, write its body, and upload any photos.
3. Save the post. TinaCloud commits the change directly to `main`.
4. Vercel detects that commit and deploys the published post.

Photos uploaded from Tina are stored in `public/images/blog/` and published with the post.

### Local setup

Copy `.env.example` to `.env` and set `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` from the TinaCloud project. Keep `.env` private.

`npm run dev` starts the local Tina editor and the Next.js site. The local editor writes directly to your working tree; use the deployed `/admin` editor to commit published posts to GitHub.
