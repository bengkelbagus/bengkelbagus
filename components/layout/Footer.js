import { Box, Heading, HStack, Text } from "@chakra-ui/layout";
import SocialMedia from "../reusables/SocialMedia";

const Footer = () => {
  return (
    <Box
      backgroundColor="blackAlpha.900"
      p="2%"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      gridGap="1rem"
    >
      <HStack width="100%" justifyContent="center" alignItems="center">
        <Heading as="h4" fontSize="14px">
          BengkelBagus
        </Heading>
        <Text fontSize="14px">Copyright 2021</Text>
      </HStack>
      <Box>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default Footer;
