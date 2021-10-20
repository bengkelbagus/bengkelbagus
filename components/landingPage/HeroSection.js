import useWindowSize from "@/Hooks/UseWindowSize";
import { Button } from "@chakra-ui/button";
import { Box, Divider, Heading, Text } from "@chakra-ui/layout";
import Link from "next/link";

const HeroSection = () => {
  const { isTabletDisplay } = useWindowSize();

  return (
    <Box
      minH={isTabletDisplay ? "80vh" : "60vh"}
      backgroundImage="/images/hero-1.png"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p="10%"
      position="relative"
    >
      <Box
        backgroundColor="#222"
        opacity="0.6"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="0"
      ></Box>
      <Box zIndex="1">
        <Box flex={isTabletDisplay ? "1" : "0.7"}>
          <Heading as="h1" size="xl">
            We are Builders
          </Heading>
          <Heading as="h1" size="2xl" my="1rem">
            We Will Build{" "}
            <Text as="span" whiteSpace="nowrap">
              Your Dream
            </Text>
          </Heading>
          <Divider
            opacity="1"
            borderColor="yellow.400"
            borderWidth="2px"
            width="100px"
          />
          <Text my="1rem">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis suscipit ultrices.
          </Text>
          <Link href="#portofolio" passHref>
            <Button backgroundColor="yellow.400" colorScheme="yellow">
              Our Portofolio
            </Button>
          </Link>
        </Box>
        {!isTabletDisplay && <Box flex="0.3"></Box>}
      </Box>
    </Box>
  );
};

export default HeroSection;
