import { Button } from "@chakra-ui/button";
import { Box, Divider, Heading, Text } from "@chakra-ui/layout";

const HeroSection = () => {
  return (
    <Box
      minH="60vh"
      backgroundColor="#22222212"
      backgroundImage="/images/"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p="10%"
    >
      <Box>
        <Box flex="0.7">
          <Heading as="h1" size="xl">
            We are Builders
          </Heading>
          <Heading as="h1" size="2xl" my="1rem">
            We Will Build{" "}
            <Text as="span" whiteSpace="nowrap">
              Your Dream
            </Text>
          </Heading>
          <Divider borderColor="yellow.400" borderWidth="2px" width="100px" />
          <Text my="1rem">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis suscipit ultrices.
          </Text>
          <Button backgroundColor="yellow.400" colorScheme="yellow">
            Our Portofolio
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
