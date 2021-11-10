import { Button } from "@chakra-ui/button";
import { Box, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { useDataBackend } from "components/context/DataContext";
import useWindowSize from "../hooks/UseWindowSize";

const AboutSection = () => {
  const { isTabletDisplay } = useWindowSize();
  const { about } = useDataBackend();

  if (!about) return null;

  return (
    <Box
      minH="60vh"
      gridGap="2rem"
      p="10%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      id="about"
    >
      <Box
        width={isTabletDisplay ? "" : "80%"}
        display="grid"
        gridTemplateColumns={isTabletDisplay ? "1fr" : "repeat(2, 1fr)"}
        gridGap="2rem"
      >
        <VStack flex="1" minW="240px" alignItems="flex-start" gridGap="1rem">
          <VStack alignItems="flex-start">
            <Heading as="h1" size="lg" color="yellow.400">
              Welcome to
            </Heading>
            <Heading as="h1" size="xl">
              {about.companyName}
            </Heading>
          </VStack>
          <Divider borderColor="yellow.400" borderWidth="2px" width="100px" />
          <Heading as="h4" size="sm" fontWeight="light" color="gray.400">
            {about.companyTagline}
          </Heading>
        </VStack>
        <VStack
          flex="1"
          minW="300px"
          alignItems="flex-start"
          justifyContent="flex-start"
          gridGap="1rem"
        >
          <Text>{about.companyDescription}</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default AboutSection;
