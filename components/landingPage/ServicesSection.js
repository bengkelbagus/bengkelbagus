import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useDataBackend } from "@/Context/DataContext";

const ServicesSection = () => {
  const { services } = useDataBackend();

  if (!services || services.length === 0) return null;

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
          {services.map((data, index) => (
            <VStack key={index} minWidth="180px" maxWidth="280px">
              <Image
                boxSize="148px"
                src={data.image.url}
                alt={data.image.alternativeText}
              />
              <Heading as="h4" size="md">
                {data.name}
              </Heading>
              <Text textAlign="center">{data.description}</Text>
            </VStack>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesSection;
