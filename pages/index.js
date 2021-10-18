import dynamic from "next/dynamic";
import LayoutDefault from "@/Layout/Default";
const LandingPage = dynamic(() => import("components/landingPage"));

const Home = () => {
  return (
    <LayoutDefault>
      <LandingPage />
    </LayoutDefault>
  );
};

export default Home;
