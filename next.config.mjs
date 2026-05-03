/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const RESUME_URL =
      "https://docs.google.com/document/d/1p9_AOGbrJWWhp3-EmGflooyrsfgvVG8EaOxXa0mbgG0"

    return [
      {
        source: "/resume",
        destination: RESUME_URL,
        // Idk if i want to migrate off of Google Drive at some point
        // but for now keeping this as non-permanent just in case
        // the URL changes
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
