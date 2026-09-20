import type { Metadata } from "next";
import { WritingsList } from "./blog";
import { SiteShell } from "../home";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = { title: "Writings | Brian Sukhnandan" };

export default function WritingsPage() {
  return (
    <SiteShell>
      <WritingsList posts={getBlogPosts()} />
    </SiteShell>
  );
}
