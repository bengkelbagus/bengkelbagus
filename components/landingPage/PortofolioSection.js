import useWindowSize from "@/Hooks/UseWindowSize";
import { Image } from "@chakra-ui/image";
import {
  AspectRatio,
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/layout";

const PortofolioSection = () => {
  const { isMobileDisplay, isLaptopDisplay } = useWindowSize();

  const imagesPortofolio = [
    {
      src: "/images/production-1.png",
    },
    {
      src: "/images/production-3.png",
    },
    {
      src: "/images/production-3.png",
    },
    {
      src: "/images/production-2.png",
    },
    {
      src: "/images/production-2.png",
    },
    {
      src: "/images/production-1.png",
    },
  ];
  return (
    <Box id="portofolio" minH="60vh" backgroundColor="blackAlpha.900">
      <Box
        px="10%"
        py="5rem"
        display="flex"
        alignItems="center"
        flexDir="column"
        gridGap="1rem"
      >
        <Heading as="h1" size="lg" color="yellow.400">
          Portofolio
        </Heading>
        <Heading as="h1" size="xl" color="white">
          Recent Projects
        </Heading>
        <Divider borderColor="yellow.400" borderWidth="2px" width="100px" />
      </Box>
      <Grid gridTemplateColumns={isMobileDisplay ? "1fr" : "repeat(2, 1fr)"}>
        {imagesPortofolio.map((data, index) => (
          <GridItem key={index}>
            <Image boxSize="100%" src={data.src} alt={index} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default PortofolioSection;
