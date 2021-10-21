import Categories from "@/Components/blogPage/Categories";
import useWindowSize from "@/Components/hooks/UseWindowSize";
import LayoutDefault from "@/Components/layout/Default";
import ArticlesHorizontalCard from "@/Reusables/ArticlesHorizontalCard";
import { Box, Divider, Grid, Heading, HStack, VStack } from "@chakra-ui/layout";

const BlogComponent = () => {
  const { isTabletDisplay } = useWindowSize();

  return (
    <LayoutDefault title="Categories | Bengkel Bagus">
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
        <VStack
          mt={isTabletDisplay ? "4rem" : "0"}
          flex="1"
          minWidth="300px"
          position="sticky"
          top="10vh"
          height="fit-content"
          gridGap="2rem"
        >
          <Categories />
        </VStack>
      </Box>
    </LayoutDefault>
  );
};

export default BlogComponent;
