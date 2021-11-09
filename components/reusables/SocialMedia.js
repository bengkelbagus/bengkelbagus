import { BACKEND_URL } from "@/Utils/Constants";
import { Box, HStack, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const SocialMedia = () => {
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    await fetch(BACKEND_URL + "/social-medias")
      .then((res) => res.json())
      .then((data) => setSocialMedia(data))
      .catch((error) => error);
  };

  return (
    <HStack width="100%" gridGap="1rem">
      {socialMedia.length !== 0 &&
        socialMedia.map((data, index) => (
          <Link key={index} scroll={false} href={data.url} passHref>
            <Box cursor="pointer">
              <Image
                boxSize="42px"
                src={`/images/${data.name}-icon.svg`}
                alt={data.name}
              />
            </Box>
          </Link>
        ))}
    </HStack>
  );
};

export default SocialMedia;
