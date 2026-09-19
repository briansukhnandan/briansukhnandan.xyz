"use client";

import {
  Box, 
  Button, 
  Center, 
  Divider, 
  HStack, 
  Image, 
  VStack
} from "@chakra-ui/react"
import { useState } from "react";

import type { BlogPost } from "./types";

export const RailwayBlogBody = ({ posts }: { posts: BlogPost[] }) => {
  const [shownIdx, setShownIdx] = useState(posts.map(() => false));
  return (<>
    <Box 
      sx={{ 
        fontSize: "28px", 
        textAlign: "center", 
        fontStyle: "italic",
        pt: "16px" 
      }}
    >
      <u>{"Brian's Railway Blog"}</u>
    </Box>
    <Center sx={{ pt: "24px", margin: "auto", width: "50%" }}>
      <VStack>
        {posts.map((blog, idx) => (
          <VStack key={blog.slug}>
            <Box>
              <Button 
                onClick={() => {
                  const modified = shownIdx.slice();
                  modified[idx] = !modified[idx];
                  setShownIdx(modified);
                }}
                size={"xs"}
              >
                {`${blog.date} - ${blog.title}`}
              </Button>
            </Box>
            {
              shownIdx[idx] ? (
                <Box pt={"10px"}>
                  <BlogEntry blog={blog} />
                </Box>
              ) : null
            }
          </VStack>
        ))}
      </VStack>
    </Center>
  </>);
}

const BlogEntry = ({ blog }: { blog: BlogPost }) => {
  return (
    <Box textAlign={"left"}>
      <Box sx={{ fontSize: "18px" }}>{ blog.title }</Box>
      <Box sx={{ pt: "3px", fontSize: "10px", fontStyle: "italic" }}>{ blog.date }</Box>
      <Box sx={{ pt: "10px", fontSize: "12px", whiteSpace: "pre-wrap" }}>{blog.body}</Box>
      {blog.images.length ? (
        <HStack spacing="10px" pt="15px">
          {blog.images.map((imageUrl) => (
            <Box key={imageUrl} sx={{ maxWidth: "50%", maxHeight: "50%" }}>
              <Image src={imageUrl} alt="" />
            </Box>
          ))}
        </HStack>
      ) : null}
      <Center>
        <Divider 
          sx={{ 
            width: "50%", 
            margin: "25px" 
          }}
        />
      </Center>
    </Box>
  );
}
