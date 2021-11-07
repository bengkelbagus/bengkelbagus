import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";
import { Box, Divider, HStack, Text } from "@chakra-ui/layout";

const NextShare = ({ link, caption, hashtag }) => {
  return (
    <Box display="flex" flexDir="column" gridGap="5px">
      <Text color="gray" fontSize="12px" textAlign="center" mb="5px">
        Share this post
      </Text>
      <HStack>
        <FacebookShareButton url={link} quote={caption} hashtag={hashtag}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <LinkedinShareButton url={link} title={caption}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <TwitterShareButton url={link} title={caption}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </HStack>
      <Divider my="1rem" />
    </Box>
  );
};

export default NextShare;
