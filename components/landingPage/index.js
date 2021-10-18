import { Box } from "@chakra-ui/layout";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import LatestNewsSection from "./LatestNewsSection";
import PortofolioSection from "./PortofolioSection";
import ProductionStepsSection from "./ProductionStepsSection";

const LandingPage = () => {
  return (
    <Box minH="100vh">
      <HeroSection />
      <AboutSection />
      <ProductionStepsSection />
      <PortofolioSection />
      <LatestNewsSection />
    </Box>
  );
};

export default LandingPage;
