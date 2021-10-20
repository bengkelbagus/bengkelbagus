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
import { useDataBackend } from "components/context/DataContext";

const ProductionStepsSection = () => {
  const { productionStep } = useDataBackend();
  const { isTabletDisplay } = useWindowSize();

  if (productionStep.length === 0) return null;
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
        {productionStep.map((data, index) => (
          <GridItem
            minH="350px"
            height="100%"
            key={index}
            p="2rem"
            backgroundImage={data.productionImage.url}
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
                <Text>{data.description}</Text>
              </VStack>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductionStepsSection;
