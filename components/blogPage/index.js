import useWindowSize from "@/Hooks/UseWindowSize";
import LayoutDefault from "@/Layout/Default";
import ArticlesCard from "@/Reusables/ArticlesCard";
import ArticlesHorizontalCard from "@/Reusables/ArticlesHorizontalCard";
import { Box, Divider, Grid, Heading, HStack, VStack } from "@chakra-ui/layout";
import { useDataBackend } from "components/context/DataContext";
import Categories from "./Categories";
import RecommendedArticles from "./RecommendedArticles";

const BlogComponent = () => {
  const { blogs } = useDataBackend();
  const { isTabletDisplay, isMobileDisplay } = useWindowSize();

  console.log(blogs);
  if (blogs.length === 0) return null;

  return (
    <Box minH="60vh" p="5%" my="4rem">
      <Box
        px="10%"
        pt="2rem"
        pb="5rem"
        display="flex"
        alignItems="center"
        flexDir="column"
        gridGap="1rem"
        textAlign="center"
      >
        <Heading as="h1" size="lg" color="yellow.400">
          Blog
        </Heading>
        <Heading as="h1" size="xl" color="black">
          Upgrade your knowledge
        </Heading>
        <Divider borderColor="yellow.400" borderWidth="2px" width="100px" />
      </Box>
      <Box
        mx="auto"
        maxWidth="80vw"
        gridGap="5%"
        display="flex"
        alignItems="flex-start"
        flexWrap="wrap"
      >
        <VStack
          flex="1"
          minW={isTabletDisplay ? "100%" : "400px"}
          width="100%"
          gridGap="2rem"
        >
          {blogs.map((data, index) => (
            <Box key={index}>
              {isMobileDisplay ? (
                <ArticlesCard
                  id={data.id}
                  image={data.featuredImage.url}
                  title={data.title}
                  date={new Date(data.published_at)}
                  description={data.description}
                />
              ) : (
                <ArticlesHorizontalCard
                  id={data.id}
                  image={data.featuredImage.url}
                  title={data.title}
                  date={new Date(data.published_at)}
                  description={data.description}
                />
              )}
            </Box>
          ))}
        </VStack>
        <VStack
          mt={isTabletDisplay ? "4rem" : "0"}
          flex="0.4"
          minWidth="300px"
          position="sticky"
          top="10vh"
          height="fit-content"
          gridGap="2rem"
        >
          <Categories />
        </VStack>
      </Box>
    </Box>
  );
};

export default BlogComponent;
