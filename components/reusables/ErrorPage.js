import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <Box
      minH="100vh"
      backgroundColor="blackAlpha.900"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack>
        <Heading>Kamu Tersesat!</Heading>
        <Link href="/" passHref>
          <Button colorScheme="yellow">Kembali ke beranda</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
