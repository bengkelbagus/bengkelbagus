import DiscusComments from "@/Reusables/discus/comments";
import { Box, Heading, Text } from "@chakra-ui/layout";

const PostSlug = () => {
  return (
    <Box minH="60vh">
      <Heading as="h3" size="md">
        title
      </Heading>
      <Text></Text>
      <DiscusComments />
    </Box>
  );
};

export default PostSlug;
