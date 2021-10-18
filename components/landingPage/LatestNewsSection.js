import { Box, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/layout";

const LatestNewsSection = () => {
  return (
    <Box
      minH="60vh"
      display="flex"
      flexDir="column"
      alignItems="center"
      p="10%"
      gridGap="1rem"
    >
      <Heading as="h1" size="lg" color="yellow.400" fontWeight="light">
        The Blog
      </Heading>
      <Heading as="h1" size="xl">
        Latest News
      </Heading>
      <Divider borderColor="yellow.400" borderWidth="2px" width="150px" />
      <HStack width="100%" overflow="auto" mt="2rem">
        <VStack alignItems="flex-start" w="250px">
          <Box backgroundColor="yellow.400" height="150px" width="100%"></Box>
          <Heading as="h4" size="md">
            Test
          </Heading>
          <Text color="gray">10 Maret 1999</Text>
          <Text>
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis suscipit ultrices.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default LatestNewsSection;
