import { BrianBlogBody } from "./blog";
import { SiteShell } from "../home";
import { getBlogPosts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <SiteShell>
      <BrianBlogBody posts={getBlogPosts()} />
    </SiteShell>
  );
}
