import { Box, Heading, HStack } from "@chakra-ui/layout";
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
  const navigations = [
    {
      name: "about",
      link: "/#about",
    },
    {
      name: "portofolio",
      link: "/#portofolio",
    },
    {
      name: "blog",
      link: "/blog",
    },
  ];

  return (
    <Box color="white" display="flex" justifyContent="space-between">
      <Link href="/" passHref>
        <Heading as="h4" size="sm" cursor="pointer">
          Bengkel Bagus
        </Heading>
      </Link>
      <HStack gridGap="1rem">
        {navigations.map((data, index) => (
          <Link href={data.link} key={index} passHref>
            <LinkItem>{data.name}</LinkItem>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default Navbar;
