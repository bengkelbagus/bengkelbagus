import {
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
    <Grid minH="40vh" gridTemplateColumns="repeat(3, 1fr)">
      {productionSteps.map((data, index) => (
        <GridItem
          minH="350px"
          height="100%"
          backgroundColor="#222"
          key={index}
          p="1rem"
        >
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
              <Text>{data.description}</Text>
            </VStack>
          </VStack>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductionStepsSection;
