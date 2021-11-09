import useWindowSize from "@/Hooks/UseWindowSize";
import { FRONTEND_URL } from "@/Utils/Constants";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { useDataBackend } from "components/context/DataContext";
const { Box, VStack, Heading, Divider, Text } = require("@chakra-ui/layout");
import Link from "next/link";

const HighlightPostSection = () => {
  const { highlightNews } = useDataBackend();
  const { isLaptopDisplay } = useWindowSize();
  const blog = highlightNews ? highlightNews.blog : null;
  const { featuredImage, title, published_at, description } = blog;
  const dateLink = `/blog/${
    new Date(published_at).toISOString().split("T")[0]
  }`;
  const postLink = dateLink + `/${title.replace(" ", "-")}`;

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
          <Image src={featuredImage.url} alt="highlight-pic" />
        </Box>
        <VStack flex="1" minW="200px" alignItems="flex-start" gridGap="1rem">
          <VStack alignItems="flex-start">
            <Heading as="h1" size="lg" color="black">
              {title}
            </Heading>
          </VStack>
          <Divider borderColor="yellow.400" borderWidth="2px" width="100px" />
          <Text>{description}</Text>
          <Link href={FRONTEND_URL + postLink} passHref>
            <Button backgroundColor="yellow.400" colorScheme="yellow">
              Read More
            </Button>
          </Link>
        </VStack>
      </Box>
    </Box>
  );
};

export default HighlightPostSection;
