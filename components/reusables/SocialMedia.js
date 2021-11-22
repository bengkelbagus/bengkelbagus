import { BACKEND_URL } from "@/Utils/Constants";
import {
  Box,
  HStack,
  Text,
  Image,
  VStack,
  useClipboard,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useState } from "react";

const SocMedContainer = styled.div`
  width: 42px;
  height: 42px;
  cursor: pointer;
  border-width: 2px;
  border-color: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.5s ease;

  &:hover {
    border-color: #fff;
  }
`;

const SocialMedia = () => {
  const [socialMedia, setSocialMedia] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [emailData, setEmailData] = useState(null);
  const { hasCopied, onCopy } = useClipboard(phoneNumber);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    await fetch(BACKEND_URL + "/social-medias")
      .then((res) => res.json())
      .then((data) => {
        const phoneData = data.find((data) => data.name === "phone");
        if (phoneData) setPhoneNumber(phoneData.url);
        const emailData = data.find((data) => data.name === "email");
        if (emailData) setEmailData(emailData.url);
        setSocialMedia(data);
      })
      .catch((error) => error);
  };

  console.log(hasCopied);

  return (
    <VStack>
      <HStack width="100%" gridGap="1rem">
        {socialMedia.length !== 0 &&
          socialMedia.map((data, index) => {
            if (data.name === "phone") {
              return null;
            }
            return (
              <Link key={index} scroll={false} href={data.url} passHref>
                <SocMedContainer>
                  <Image
                    src={`/images/${data.name}-icon.svg`}
                    alt={data.name}
                  />
                </SocMedContainer>
              </Link>
            );
          })}
      </HStack>
      <VStack width="100%" alignItems="flex-end">
        {emailData && <Text>{emailData.split(":")[1]}</Text>}
        {phoneNumber && <Text>{phoneNumber}</Text>}
      </VStack>
    </VStack>
  );
};

export default SocialMedia;
