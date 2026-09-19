import { Home } from "./home";
import { getBlogPosts } from "@/lib/blog";

export default function Page() {
  return <Home posts={getBlogPosts()} />;
}
