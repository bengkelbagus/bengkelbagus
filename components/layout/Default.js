import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useWindowSize from "@/Hooks/UseWindowSize";
import { useRef, useState } from "react";
import useEventListener from "@/Hooks/UseEventListener";
import { useRouter } from "next/router";

const LayoutDefault = ({
  children,
  title,
  image,
  description,
  currentUrl,
  quote,
  hashtag,
  heads,
}) => {
  const bodyRef = useRef(null);
  const { isLaptopDisplay, isTabletDisplay } = useWindowSize();
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const { pathname } = router;

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
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        {currentUrl && <meta property="url" content={currentUrl} />}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        {title && <meta property="title" content={title} />}
        {quote && <meta property="quote" content={quote} />}
        {description && <meta name="description" content={description} />}
        {image && <meta property="image" content={image} />}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {title && <meta property="og:title" content={title} />}
        {quote && <meta property="og:quote" content={quote} />}
        {hashtag && <meta property="og:hashtag" content={hashtag} />}
        <meta property="og:image" content={image} />
        <meta content="image/*" property="og:image:type" />
        {currentUrl && <meta property="og:url" content={currentUrl} />}
        <meta property="og:site_name" content="CampersTribe" />
        {description && (
          <meta property="og:description" content={description} />
        )}
        {heads}
      </Head>
      <Box
        position="fixed"
        top="0"
        left="0"
        zIndex="99"
        width="100%"
        backgroundColor={
          scrollY > 50 || pathname !== "/" ? "blackAlpha.900" : "transparent"
        }
        pl={isLaptopDisplay ? "2rem" : "10%"}
        pr={isLaptopDisplay ? "1rem" : "10%"}
        py={isTabletDisplay ? "10px" : "1.5rem"}
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
