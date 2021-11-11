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
      backgroundColor="#f7f7f7"
      p="10%"
    >
      <Box width="80%" display="flex" flexDirection="column" gridGap="4rem">
        <VStack>
          <Heading as="h1" size="lg" color="yellow.400" fontWeight="light">
            Special Offer
          </Heading>
          <Heading as="h1" size="xl">
            Our Best Services
          </Heading>
        </VStack>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(240px, 1fr))"
          width="100%"
        >
          {services.map((data, index) => (
            <VStack key={index} m="10%">
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
