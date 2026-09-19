import type { Metadata } from "next";
import { Box, Button, Center } from "@chakra-ui/react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogPostContent } from "../blog";
import { SiteShell } from "../../home";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

type BlogPostPageProps = {
  params: { slug: string };
};

export const generateStaticParams = () =>
  getBlogPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: BlogPostPageProps): Metadata => {
  const post = getBlogPost(params.slug);

  return post ? { title: `${post.title} | Brian Sukhnandan` } : {};
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteShell showNavigation={false}>
      <Center pt={{ base: "20px", md: "28px" }}>
        <Button as={Link} href="/blog" size="xs" variant="link" colorScheme="green">
          ← Back to blog
        </Button>
      </Center>
      <Box pt={{ base: "24px", md: "32px" }}>
        <BlogPostContent blog={post} />
      </Box>
    </SiteShell>
  );
}
