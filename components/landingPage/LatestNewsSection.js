import ArticlesCard from "@/Reusables/ArticlesCard";
import { Box, Divider, Grid, Heading, HStack } from "@chakra-ui/layout";
import { useDataBackend } from "components/context/DataContext";
import useWindowSize from "../hooks/UseWindowSize";

const LatestNewsSection = () => {
  const { blogs } = useDataBackend();
  const { isMobileDisplay } = useWindowSize();

  if (blogs.length === 0) return null;

  return (
    <Box
      minH="40vh"
      display="flex"
      flexDir="column"
      px="5%"
      py="10vh"
      gridGap="1rem"
    >
      <Heading as="h1" size="lg" color="yellow.400" fontWeight="light">
        The Blog
      </Heading>
      <Heading as="h1" size="xl">
        Latest News
      </Heading>
      <Divider borderColor="yellow.400" borderWidth="2px" width="150px" />
      <Grid
        width="100%"
        mt="3rem"
        gridGap="2rem"
        gridTemplateColumns={
          isMobileDisplay ? "1fr" : "repeat(auto-fit, minmax(260px, 1fr))"
        }
      >
        {blogs.slice(0, 3).map((data, index) => (
          <Box key={index} m="1rem auto" minWidth="240px">
            <ArticlesCard {...data} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNewsSection;
