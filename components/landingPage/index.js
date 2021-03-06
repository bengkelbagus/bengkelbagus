import { Box } from "@chakra-ui/layout";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import HighlightPostSection from "./HighlightPostSection";
import LatestNewsSection from "./LatestNewsSection";
import PortofolioSection from "./PortofolioSection";
import ProductionStepsSection from "./ProductionStepsSection";
import ServicesSection from "./ServicesSection";
import TestimonialSection from "./TestimonialSection";

const LandingPage = () => {
  return (
    <Box minH="100vh">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductionStepsSection />
      <PortofolioSection />
      <HighlightPostSection />
      <TestimonialSection />
      <LatestNewsSection />
    </Box>
  );
};

export default LandingPage;
