import Comments from "@/Components/blogPage/Comments";
import { useDataBackend } from "@/Components/context/DataContext";
import useWindowSize from "@/Components/hooks/UseWindowSize";
import NextShare from "@/Components/reusables/next-share/NextShare";
import LayoutDefault from "@/Layout/Default";
import { FRONTEND_URL } from "@/Utils/Constants";
import { dateFormat } from "@/Utils/Helper";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

const PostSlug = () => {
  const router = useRouter();
  const { query, asPath } = router;
  const { date, slug } = query;
  const { isTabletDisplay } = useWindowSize();
  const { blogs } = useDataBackend();
  const blog = blogs.find(({ published_at, title }) => {
    return (
      new Date(published_at).toISOString().split("T")[0] === date &&
      slug === title.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")
    );
  });

  if (!blog) return null;
  return (
    <LayoutDefault
      title={blog.title + " | Bengkel Bagus"}
      image={blog.featuredImage.url}
      description={blog.description}
      currentUrl={FRONTEND_URL + asPath}
    >
      <Box
        minH="60vh"
        width={isTabletDisplay ? "80vw" : "60vw"}
        mx="auto"
        py="10vh"
        mt="4rem"
      >
        <Box display="flex" flexDir="column" mb="2rem">
          <VStack alignItems="flex-start">
            <Heading as="h1" size="2xl">
              {blog.title}
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
          <Box id="blog">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </Box>
          <Box mt="2rem" alignSelf="center">
            <NextShare
              link={FRONTEND_URL + asPath}
              caption={blog.description}
            />
          </Box>
        </Box>
        <Comments blogId={blog.id} comments={blog.comments} />
      </Box>
    </LayoutDefault>
  );
};

export default PostSlug;
