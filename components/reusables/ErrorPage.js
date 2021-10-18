import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <Box minH="70vh" display="flex" justifyContent="center" alignItems="center">
      <VStack>
        <Heading>Kamu Tersesat!</Heading>
        <Link href="/" passHref>
          <Button colorScheme="teal">Kembali ke beranda</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
