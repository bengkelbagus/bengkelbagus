import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useDataBackend } from "@/Context/DataContext";

const ServicesSection = () => {
  const { services } = useDataBackend();

  if (!services) return null;

  return (
    <Box
      minHeight="60vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="10%"
    >
      <Box width="80%" display="flex" flexDirection="column" gridGap="4rem">
        <Heading color="yellow.400" textAlign="center">
          Layanan Kami
        </Heading>
        <Box
          display="flex"
          justifyContent="space-around"
          flexWrap="wrap"
          width="100%"
          gridGap="2rem"
        >
          <VStack minWidth="180px" maxWidth="280px">
            <Image
              boxSize="148px"
              src="/images/production-1.png"
              alt="service-image"
            />
            <Heading as="h4" size="md">
              Test
            </Heading>
            <Text textAlign="center">
              Lorem ipsum dolor sit amet fesf sef sef sef sef sef sef sef sefes
              seskeg rg grg drg drg drgdr grdgd rfes.
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesSection;
