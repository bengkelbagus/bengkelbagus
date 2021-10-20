import dynamic from "next/dynamic";
import LayoutDefault from "@/Layout/Default";
import useScript from "@/Hooks/UseScript";
import { useRouter } from "next/router";
const LandingPage = dynamic(() => import("components/landingPage"));

const Home = () => {
  const router = useRouter();
  const { loading, _, value } = useScript(
    "dsq-count-scr",
    "https://bengkel-bagus.disqus.com/count.js",
    [router]
  );

  return (
    <LayoutDefault>
      <LandingPage />
    </LayoutDefault>
  );
};

export default Home;
