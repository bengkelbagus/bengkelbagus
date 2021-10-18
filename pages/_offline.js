import { Box, Heading, VStack } from "@chakra-ui/layout";

const ErrorPage = () => {
  return (
    <Box minH="70vh" display="flex" justifyContent="center" alignItems="center">
      <VStack>
        <Heading>Kamu sedang offline!</Heading>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
