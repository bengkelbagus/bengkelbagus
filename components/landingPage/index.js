import { Box } from "@chakra-ui/layout";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import LatestNewsSection from "./LatestNewsSection";
import ProductionStepsSection from "./ProductionStepsSection";

const LandingPage = () => {
  return (
    <Box minH="100vh">
      <HeroSection />
      <AboutSection />
      <ProductionStepsSection />
      <LatestNewsSection />
    </Box>
  );
};

export default LandingPage;
