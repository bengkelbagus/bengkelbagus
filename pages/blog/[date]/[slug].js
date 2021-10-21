import { useDataBackend } from "@/Components/context/DataContext";
import LayoutDefault from "@/Layout/Default";
import DiscusComments from "@/Reusables/discus/comments";
import { BACKEND_URL } from "@/Utils/Constants";
import { dateFormat } from "@/Utils/Helper";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const PostSlug = () => {
  const router = useRouter();
  const { query } = router;
  const { date, slug } = query;
  const { blogs } = useDataBackend();
  const blog = blogs.find(
    ({ published_at, title }) =>
      new Date(published_at).toISOString().split("T")[0] === date &&
      title === slug.replace("-", " ")
  );

  if (!blog) return null;
  return (
    <LayoutDefault title={slug + " | Bengkel Bagus"}>
      <Box minH="60vh" width="80vw" mx="auto" py="10vh" mt="4rem">
        <Box mb="4rem">
          <VStack alignItems="flex-start">
            <Heading as="h1" size="2xl">
              title
            </Heading>
            <HStack
              width="100%"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
              fontSize="14px"
            >
              <Text color="gray.400">
                Posted by{" "}
                <Text as="a" href={"mailto:" + blog.author.email}>
                  {blog.author.name}
                </Text>
              </Text>
              <Text color="gray.400">
                {dateFormat(new Date(blog.published_at))}
              </Text>
            </HStack>
          </VStack>
          <Box backgroundColor="yellow.400" my="2rem">
            <Image width="100%" src={blog.featuredImage.url} alt="post-image" />
          </Box>
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </Box>
        <DiscusComments />
      </Box>
    </LayoutDefault>
  );
};

export default PostSlug;
