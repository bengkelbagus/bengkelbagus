import useWindowSize from "@/Hooks/UseWindowSize";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { useDataBackend } from "components/context/DataContext";

const { Box, VStack, Heading, Divider, Text } = require("@chakra-ui/layout");

const HighlightPostSection = () => {
  const { highlightNews } = useDataBackend();
  const { isLaptopDisplay } = useWindowSize();
  const blog = highlightNews ? highlightNews.blog : null;

  if (!blog) return null;

  return (
    <Box
      minH="60vh"
      flexWrap="wrap"
      display="flex"
      alignItems="center"
      py="4rem"
    >
      <Box
        height="fit-content"
        width={isLaptopDisplay ? "80%" : "60%"}
        m="auto"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        gridGap="2rem"
      >
        <Box flex="1" minWidth="100px">
          <Image src="/images/world-map.png" alt="highlight-pic" />
        </Box>
        <VStack flex="1" minW="200px" alignItems="flex-start" gridGap="1rem">
          <VStack alignItems="flex-start">
            <Heading as="h1" size="lg" color="black">
              {blog.title}
            </Heading>
          </VStack>
          <Divider borderColor="yellow.400" borderWidth="2px" width="100px" />
          <Text>{blog.description}</Text>
          <Button backgroundColor="yellow.400" colorScheme="yellow">
            Read More
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default HighlightPostSection;
