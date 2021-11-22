import { BACKEND_URL } from "@/Utils/Constants";
import { Box, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useState } from "react";

const WhatsappContainer = styled.div`
  background-color: rgb(41, 50, 60);
  color: white;
  display: flex;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  padding: 8px;
  overflow-x: hidden;
  position: relative;
  width: 64px;
  box-shadow: rgb(41 50 60 / 50%) 0px 2px 16px;
  transition: all 0.2s ease;

  & img {
    mix-blend-mode: screen;
  }

  &::after {
    content: "Whatsapp";
    font-weight: 600;
    padding-left: 8px;
  }

  &:hover {
    width: 180px;
  }

  &:active {
    transform: scale(1.1);
  }
`;

const WhatsappRedirect = () => {
  const [whatsapp, setWhatsapp] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    await fetch(BACKEND_URL + "/social-medias")
      .then((res) => res.json())
      .then((data) => {
        const whatsappObj = data.find(({ name }) => name === "whatsapp");
        console.log(whatsappObj);
        if (whatsappObj) setWhatsapp(whatsappObj);
      })
      .catch((error) => error);
  };

  if (!whatsapp) return null;

  return (
    <Box position="fixed" bottom="3rem" left="2rem" zIndex="999">
      <Link href={whatsapp.url} passHref>
        <WhatsappContainer>
          <Image
            boxSize="48px"
            src="/images/whatsapp-icon.svg"
            alt="whatsapp"
          />
        </WhatsappContainer>
      </Link>
    </Box>
  );
};

export default WhatsappRedirect;
