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
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  cursor: pointer;
  aspect-ratio: 1;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
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

const ArticlesCard = (blog) => {
  const { featuredImage, title, published_at, description, comments } = blog;
  if (!featuredImage || !title || !published_at || !description) return null;

  const dateLink = `/blog/${
    new Date(published_at).toISOString().split("T")[0]
  }`;
  const postLink =
    dateLink + `/${title.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")}`;

  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      gridGap="1rem"
      w="100%"
    >
      <Link href={FRONTEND_URL + postLink} passHref>
        <Box width="100%" overflow="hidden">
          <ImageContainer backgroundImage={featuredImage.url}></ImageContainer>
        </Box>
      </Link>
      <VStack alignItems="flex-start">
        <Box gridGap="5px">
          <Link href={FRONTEND_URL + postLink} passHref>
            <Title>{title}</Title>
          </Link>
          <Link href={FRONTEND_URL + dateLink} passHref>
            <DateText>{dateFormat(published_at)}</DateText>
          </Link>
        </Box>
        <Text>{trimString(description, 100)}</Text>
        <Link href={postLink + "#comments"} passHref>
          <CommentText>{comments ? comments.length : 0} Komentar</CommentText>
        </Link>
      </VStack>
    </Box>
  );
};

export default ArticlesCard;
