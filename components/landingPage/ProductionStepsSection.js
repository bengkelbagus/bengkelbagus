import { trimString } from "@/Utils/Helper";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/layout";

const ProductionStepsSection = () => {
  const productionSteps = [
    {
      title: "Design & Building",
      description:
        "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc",
      bgImage: "/images/",
    },
    {
      title: "Construction Renovation",
      description:
        "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc",
      bgImage: "/images/",
    },
    {
      title: "Finishing Interiors",
      description:
        "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc",
      bgImage: "/images/",
    },
  ];

  return (
    <Box
      backgroundColor="blackAlpha.900"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid width="80vw" minH="40vh" gridTemplateColumns="repeat(3, 1fr)">
        {productionSteps.map((data, index) => (
          <GridItem minH="350px" height="100%" key={index} p="1rem">
            <VStack
              height="100%"
              justifyContent="flex-end"
              alignItems="flex-start"
              color="white"
            >
              <VStack
                minH="150px"
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <Heading as="h4" size="md">
                  {data.title}
                </Heading>
                <Divider
                  borderColor="yellow.400"
                  borderWidth="2px"
                  width="100px"
                />
                <Text>{trimString(data.description, 120)}</Text>
              </VStack>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductionStepsSection;
