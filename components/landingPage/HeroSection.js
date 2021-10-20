import useWindowSize from "@/Hooks/UseWindowSize";
import { Button } from "@chakra-ui/button";
import { Box, Divider, Heading, Text } from "@chakra-ui/layout";
import { useDataBackend } from "components/context/DataContext";
import Link from "next/link";

const HeroSection = () => {
  const { hero } = useDataBackend();
  const { isTabletDisplay } = useWindowSize();

  if (!hero) return null;

  return (
    <Box
      minH={isTabletDisplay ? "80vh" : "60vh"}
      backgroundImage={hero.image.url}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      color="white"
      display="flex"
      alignItems="center"
      p="10%"
      position="relative"
    >
      <Box
        backgroundColor="#222"
        opacity="0.6"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="0"
      ></Box>
      <Box zIndex="1">
        <Box flex={isTabletDisplay ? "1" : "0.7"}>
          <Heading as="h1" size="xl">
            {hero.subHeading}
          </Heading>
          <Heading as="h1" size="2xl" my="1rem">
            {hero.heading}
          </Heading>
          <Divider
            opacity="1"
            borderColor="yellow.400"
            borderWidth="2px"
            width="100px"
          />
          <Text my="1rem">{hero.description}</Text>
          <Link href="#portofolio" passHref>
            <Button backgroundColor="yellow.400" colorScheme="yellow">
              Our Portofolio
            </Button>
          </Link>
        </Box>
        {!isTabletDisplay && <Box flex="0.3"></Box>}
      </Box>
    </Box>
  );
};

export default HeroSection;
