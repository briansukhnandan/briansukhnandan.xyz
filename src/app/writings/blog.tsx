import {
  Box,
  Button,
  Center,
  Image,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import type { BlogPost } from "./types";

const formatBlogDate = (date: string) => date.replaceAll("-", "/");

export const WritingsList = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <Center sx={{ pt: "24px", margin: "auto", width: "50%" }}>
      <VStack>
        {posts.map((blog) => (
          <VStack key={blog.slug}>
            <Box>
              <Button 
                as={Link}
                href={`/writings/${blog.slug}`}
                size={"xs"}
              >
                {`${formatBlogDate(blog.date)} - ${blog.title}`}
              </Button>
            </Box>
          </VStack>
        ))}
      </VStack>
    </Center>
  );
}

export const BlogPostContent = ({ blog }: { blog: BlogPost }) => {
  return (
    <Box
      as="article"
      width="100%"
      maxWidth="760px"
      margin="0 auto"
      padding={{ base: "0 20px 36px", md: "0 32px 48px" }}
      textAlign="left"
    >
      <Box as="h1" fontSize={{ base: "22px", md: "26px" }} lineHeight="short" fontWeight="semibold">
        {blog.title}
      </Box>
      <Box pt="6px" fontSize="11px" fontStyle="italic" color="whiteAlpha.700">
        {formatBlogDate(blog.date)}
      </Box>
      <Box
        pt="20px"
        fontSize={{ base: "14px", md: "15px" }}
        lineHeight="tall"
        sx={{
          "& p": { marginBottom: "18px" },
          "& ul, & ol": { paddingLeft: "24px", marginBottom: "18px" },
          "& li + li": { marginTop: "6px" },
        }}
      >
        <ReactMarkdown
          components={{
            a: ({ children, href }) =>
              href ? (
                <ChakraLink href={href} color="teal.200" textDecoration="underline" isExternal>
                  {children}
                </ChakraLink>
              ) : (
                <>{children}</>
              ),
          }}
        >
          {blog.body}
        </ReactMarkdown>
      </Box>
      {blog.images.length ? (
        <VStack spacing="18px" pt="10px" align="center">
          {blog.images.map((imageUrl) => (
            <Box key={imageUrl} width="100%" display="flex" justifyContent="center">
              <Image
                src={imageUrl}
                alt={`${blog.title} photo`}
                maxWidth="100%"
                maxHeight="720px"
                objectFit="contain"
              />
            </Box>
          ))}
        </VStack>
      ) : null}
    </Box>
  );
}
