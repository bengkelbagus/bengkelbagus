import useToggle from "@/Hooks/UseToggle";
import useWindowSize from "@/Hooks/UseWindowSize";
import { Button } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Divider, Heading, HStack, VStack } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import styled from "@emotion/styled";
import Link from "next/link";

const LinkItem = styled.p`
  text-transform: capitalize;
  cursor: pointer;
  opacity: 1;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background-color: #fff;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    transition: width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &:hover:after {
    width: 100%;
  }
`;

const Navbar = () => {
  const [drawer, toggleDrawer] = useToggle(false);
  const { isTabletDisplay } = useWindowSize();

  const navigations = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "about",
      link: "/#about",
    },
    {
      name: "portofolio",
      link: "/#portofolio",
    },
    {
      name: "testimonial",
      link: "/#testimonial",
    },
    {
      name: "blog",
      link: "/blog",
    },
  ];

  return (
    <Box
      color="white"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link href="/" passHref>
        <Heading as="h4" size="sm" cursor="pointer">
          Bengkel Bagus
        </Heading>
      </Link>
      {isTabletDisplay ? (
        <>
          <Button
            variant="ghost"
            color="white"
            colorScheme="blackAlpha"
            onClick={() => toggleDrawer(true)}
          >
            <HamburgerIcon />
          </Button>
          <Drawer
            isOpen={drawer}
            placement="right"
            onClose={() => toggleDrawer(false)}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton mt="5px" mr="5px" color="white" />
              <DrawerBody backgroundColor="black">
                <Heading
                  color="yellow.400"
                  as="h4"
                  size="md"
                  mt="3rem"
                  px="1rem"
                >
                  Bengkel Bagus
                </Heading>
                <Divider my="2rem" />
                <VStack gridGap="2rem" justifyContent="flex-start">
                  {navigations.map((data, index) => (
                    <Link href={data.link} key={index} passHref>
                      <Button
                        variant="ghost"
                        width="100%"
                        display="flex"
                        justifyContent="flex-start"
                        colorScheme="blackAlpha"
                        color="white"
                        fontSize="32px"
                      >
                        {data.name}
                      </Button>
                    </Link>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <HStack gridGap="1rem">
          {navigations.map((data, index) => (
            <Link href={data.link} key={index} passHref>
              <LinkItem>{data.name}</LinkItem>
            </Link>
          ))}
        </HStack>
      )}
    </Box>
  );
};

export default Navbar;
