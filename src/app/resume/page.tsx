import type { Metadata } from "next";

const resumeId = "1p9_AOGbrJWWhp3-EmGflooyrsfgvVG8EaOxXa0mbgG0";
const resumePreviewUrl = `https://docs.google.com/document/d/${resumeId}/preview`;

export const metadata: Metadata = {
  title: "Resumé | Brian Sukhnandan",
};

export default function ResumePage() {
  return (
    <main style={{ height: "100vh", minHeight: "42rem" }}>
      <iframe
        title="Brian Sukhnandan's resumé"
        src={resumePreviewUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
      >
        <a href={resumePreviewUrl}>Open Brian Sukhnandan&apos;s resumé</a>
      </iframe>
    </main>
  );
}
