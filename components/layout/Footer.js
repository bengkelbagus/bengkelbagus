import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { useDataBackend } from "../context/DataContext";
import useWindowSize from "../hooks/UseWindowSize";
import SocialMedia from "../reusables/SocialMedia";

const Footer = () => {
  const { isLaptopDisplay, isTabletDisplay } = useWindowSize();
  const { about } = useDataBackend();

  if (!about) return null;

  return (
    <Box
      backgroundColor="#000"
      py={isTabletDisplay ? "10px" : "4rem"}
      pl={isLaptopDisplay ? "2rem" : "10%"}
      pr={isLaptopDisplay ? "1rem" : "10%"}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color="white"
      gridGap="1rem"
    >
      <VStack width="50%" justifyContent="center" alignItems="flex-start">
        <Heading as="h4" fontSize="14px">
          {about.companyName}
        </Heading>
        <Text fontSize="14px">{about.companyDescription}</Text>
      </VStack>
      <Box>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default Footer;
