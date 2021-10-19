import LayoutDefault from "@/Layout/Default";
import DiscusComments from "@/Reusables/discus/comments";
import { Box, Heading, Text } from "@chakra-ui/layout";

const PostSlug = () => {
  return (
    <LayoutDefault>
      <Box minH="60vh" width="80vw" mx="auto" py="10vh" mt="4rem">
        <Heading as="h1" size="xl" mb="1rem">
          title
        </Heading>
        <Text>
          Most websites implementing Disqus will want a way to display the
          comment count for each page with comments, on their home page. We
          offer an easy to use JavaScript code snippet which displays the number
          of comments for pages with Disqus embedded. Paste the following code
          at the bottom of the your index or home page, right before the
          closing. Change the shortname variable from EXAMPLE to whatever the
          shortname is of the forum you're using. Your shortname can also be
          found on your forum's Admin Settings General page. On the index or
          home page, append #disqus_thread to the end of each article URL which
          appears inside the href tag for the article comments link. This will
          tell Disqus which links to look up so it can return the correct
          comment count.{" "}
        </Text>
        <DiscusComments />
      </Box>
    </LayoutDefault>
  );
};

export default PostSlug;
