import dynamic from "next/dynamic";
import LayoutDefault from "@/Layout/Default";
import useScript from "@/Hooks/UseScript";
import { useRouter } from "next/router";
import LandingPage from "@/Components/landingPage";

const Home = () => {
  const router = useRouter();
  const { loading, _, value } = useScript(
    "https://bengkel-bagus.disqus.com/count.js",
    "dsq-count-scr",
    [router]
  );

  return (
    <LayoutDefault title="Home | Bengkel Bagus">
      <LandingPage />
    </LayoutDefault>
  );
};

export default Home;
