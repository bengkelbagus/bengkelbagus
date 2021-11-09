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
import { useDataBackend } from "components/context/DataContext";

const PortofolioSection = () => {
  const { projects } = useDataBackend();
  const { isMobileDisplay } = useWindowSize();

  if (projects.length === 0) return null;

  return (
    <Box id="portofolio" minH="40vh" backgroundColor="blackAlpha.900">
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
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-end"
      >
        {projects.map((data, index) => (
          <>
            <Box
              minWidth={isMobileDisplay ? "100%" : "480px"}
              flex="1"
              key={index}
            >
              <Image boxSize="100%" src={data.cover.url} alt={index} />
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
};

export default PortofolioSection;
