import ArticlesCard from "@/Reusables/ArticlesCard";
import {
  CarouselItem,
  GliderCarousel,
} from "@/Reusables/gliderJS/GliderCarousel";
import { trimString } from "@/Utils/Helper";
import { Box, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { useDataBackend } from "components/context/DataContext";

const LatestNewsSection = () => {
  const { blogs } = useDataBackend();

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
      <HStack width="100%" mt="3rem" overflowX="auto" gridGap="1rem">
        {blogs.slice(0, 3).map((data, index) => (
          <Box key={index} minWidth="240px" maxWidth="240px">
            <ArticlesCard
              id={data.id}
              image={data.featuredImage.url}
              title={data.title}
              date={new Date(data.published_at)}
              description={data.description}
              isColumn
            />
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default LatestNewsSection;
