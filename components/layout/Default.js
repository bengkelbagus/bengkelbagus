import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useWindowSize from "@/Hooks/UseWindowSize";
import { useRef, useState } from "react";
import useEventListener from "@/Hooks/UseEventListener";

const LayoutDefault = ({ children, title, heads }) => {
  const bodyRef = useRef(null);
  const { isLaptopDisplay } = useWindowSize();
  const [scrollY, setScrollY] = useState(0);

  useEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        {heads}
      </Head>
      <Box
        position="fixed"
        top="0"
        left="0"
        zIndex="99"
        width="100%"
        backgroundColor={scrollY > 50 ? "blackAlpha.900" : "transparent"}
        px={isLaptopDisplay ? "2rem" : "10%"}
        py="1.5rem"
      >
        <Navbar />
      </Box>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", type: "tween" }}
        >
          <Box ref={bodyRef}>{children}</Box>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default LayoutDefault;
