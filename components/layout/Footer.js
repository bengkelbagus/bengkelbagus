import { Box, Heading, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Box
      minH="20vh"
      backgroundColor="blackAlpha.900"
      p="2%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      gridGap="1rem"
    >
      <Heading as="h4" fontSize="14px">
        BengkelBagus
      </Heading>
      <Text fontSize="14px">Copyright 2021</Text>
    </Box>
  );
};

export default Footer;
