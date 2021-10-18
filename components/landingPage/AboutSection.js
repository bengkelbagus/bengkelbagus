import { Button } from "@chakra-ui/button";
import { Box, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/layout";

const AboutSection = () => {
  return (
    <Box
      minH="60vh"
      gridGap="2rem"
      p="10%"
      display="flex"
      alignItems="flex-start"
      flexWrap="wrap"
      id="about"
    >
      <VStack flex="1" minW="200px" alignItems="flex-start" gridGap="1rem">
        <VStack alignItems="flex-start">
          <Heading as="h1" size="lg" color="yellow.400">
            Welcome to
          </Heading>
          <Heading as="h1" size="xl">
            BengkelBagus
          </Heading>
        </VStack>
        <Divider borderColor="yellow.400" borderWidth="2px" width="100px" />
        <Heading as="h2" size="md" fontWeight="light" color="gray.400">
          We are the leader with 25 years of experience in the construction
          market!
        </Heading>
      </VStack>
      <VStack
        flex="1"
        minW="200px"
        alignItems="flex-start"
        justifyContent="flex-start"
        gridGap="1rem"
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          gravida cursus eleifend. Nullam ornare sapien quis vulputate cursus.
          Vivamus vel pellentesque purus, sed dignissim elit. Maecenas ac augue
          metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus
          ut cursus sem. Vestibulum feugiat eros lorem, vitae faucibus arcu
          aliquam ac. Sed tempor, arcu non sodales gravida, sapien dui iaculis
          felis, vel luctus sapien nisi non orci. Ut laoreet ante tellus, vel
          hendrerit lorem tincidunt sed. Etiam rhoncus euismod velit ac rutrum.
        </Text>
        <Button backgroundColor="yellow.400" colorScheme="yellow">
          Read more
        </Button>
      </VStack>
    </Box>
  );
};

export default AboutSection;
