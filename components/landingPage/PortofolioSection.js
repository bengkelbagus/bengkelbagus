import useWindowSize from "@/Hooks/UseWindowSize";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useDataBackend } from "@/Context/DataContext";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const PortofolioSection = () => {
  const { projects } = useDataBackend();
  const { isMobileDisplay } = useWindowSize();
  const [hover, setHover] = useState(false);
  const [projectSelected, setProjectSelected] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              minHeight="300px"
              flex="1"
              key={index}
              backgroundImage={data.cover.url}
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              position="relative"
              cursor="pointer"
              onClick={() => {
                onOpen();
                setProjectSelected(index);
              }}
              onMouseEnter={() => {
                setProjectSelected(index);
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <Modal
                size="3xl"
                isOpen={isOpen && projectSelected === index}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalBody py="3rem">
                    <VStack alignItems="flex-start" gridGap="1rem">
                      <Image
                        boxSize="100%"
                        src={data.cover.url}
                        alt={data.name}
                      />
                      <VStack alignItems="flex-start">
                        <Heading
                          as="h4"
                          size="lg"
                          textTransform="capitalize"
                          textOverflow="ellipsis"
                          wordBreak="break-word"
                        >
                          {data.name}
                        </Heading>
                        <Text>{data.description}</Text>
                      </VStack>
                    </VStack>
                  </ModalBody>
                </ModalContent>
              </Modal>
              <AnimatePresence>
                {projectSelected === index && hover && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      exit={{ opacity: 0 }}
                      style={{
                        backgroundColor: "#000",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        zIndex: "0",
                      }}
                    ></motion.div>
                    <motion.div
                      initial={{ y: "10%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "10%", opacity: 0 }}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        padding: "2rem",
                        zIndex: "1",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gridGap: "1rem",
                      }}
                    >
                      <Heading
                        as="h4"
                        size="lg"
                        textTransform="capitalize"
                        textAlign="center"
                        textOverflow="ellipsis"
                        wordBreak="break-word"
                      >
                        {data.name}
                      </Heading>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
};

export default PortofolioSection;
