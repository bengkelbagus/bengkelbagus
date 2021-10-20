import useWindowSize from "@/Hooks/UseWindowSize";
import { FRONTEND_URL } from "@/Utils/Constants";
import { dateFormat, trimString } from "@/Utils/Helper";
import { VStack, Box, Heading, Text } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import Link from "next/link";

const ImageContainer = styled.div`
  background-color: #222;
  background-image: url(${(prop) => prop.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  cursor: pointer;
  aspect-ratio: 1;
`;

const Title = styled.h4`
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
`;

const DateText = styled.p`
  font-size: 14px;
  cursor: pointer;
  color: #ccc;

  &:hover {
    color: #aaa;
  }
`;

const CommentText = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: #ccc;

  &:hover {
    color: #aaa;
  }
`;

const ArticlesCard = ({ id, image, title, date, description }) => {
  if (!image || !title || !date || !description) return null;

  const postLink = `/blog/${id}`;

  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      gridGap="1rem"
      w="100%"
    >
      <Link href={FRONTEND_URL + postLink} passHref>
        <ImageContainer backgroundImage={image}></ImageContainer>
      </Link>
      <VStack alignItems="flex-start">
        <Box gridGap="5px">
          <Link href={FRONTEND_URL + postLink} passHref>
            <Title>{title}</Title>
          </Link>
          <Link href={FRONTEND_URL + postLink} passHref>
            <DateText>{dateFormat(date)}</DateText>
          </Link>
        </Box>
        <Text>{trimString(description, 100)}</Text>
        <CommentText
          className="disqus-comment-count"
          data-disqus-url={FRONTEND_URL + postLink + "#disqus_thread"}
        >
          {" "}
        </CommentText>
      </VStack>
    </Box>
  );
};

export default ArticlesCard;
