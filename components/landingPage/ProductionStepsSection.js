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
import useWindowSize from "@/Hooks/UseWindowSize";

const ProductionStepsSection = () => {
  const { isTabletDisplay, isLaptopDisplay } = useWindowSize();

  const productionSteps = [
    {
      title: "Design & Building",
      description:
        "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc",
      bgImage: "/images/production-1.png",
    },
    {
      title: "Construction Renovation",
      description:
        "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc",
      bgImage: "/images/production-2.png",
    },
    {
      title: "Finishing Interiors",
      description:
        "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc",
      bgImage: "/images/production-3.png",
    },
  ];

  return (
    <Box
      backgroundColor="blackAlpha.900"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        width="100%"
        minH="40vh"
        gridTemplateColumns={isTabletDisplay ? "1fr" : "repeat(3, 1fr)"}
      >
        {productionSteps.map((data, index) => (
          <GridItem
            minH="350px"
            height="100%"
            key={index}
            p="2rem"
            backgroundImage={data.bgImage}
            backgroundBlendMode="overlay"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundColor="#222222dd"
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
                <Text>{trimString(data.description, 200)}</Text>
              </VStack>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductionStepsSection;
