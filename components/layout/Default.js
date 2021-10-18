import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const LayoutDefault = ({ children, title, heads }) => {
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
          <Box mt="4rem">{children}</Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default LayoutDefault;
