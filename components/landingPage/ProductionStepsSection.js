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
            position="relative"
            backgroundImage={data.productionImage.url}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
          >
            <Box
              width="100%"
              height="100%"
              backgroundColor="blackAlpha.900"
              opacity="0.6"
              zIndex="0"
            ></Box>
            <Box
              width="100%"
              height="100%"
              p="2rem"
              position="absolute"
              top="0"
              left="0"
              zIndex="1"
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
                    opacity="1"
                    borderColor="yellow.400"
                    borderWidth="2px"
                    width="100px"
                  />
                  <Text>{data.description}</Text>
                </VStack>
              </VStack>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductionStepsSection;
