import LayoutDefault from "@/Layout/Default";
import DiscusComments from "@/Reusables/discus/comments";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { useRouter } from "next/router";

const PostSlug = () => {
  const router = useRouter();
  const { query } = router;
  const { date, slug } = query;

  return (
    <LayoutDefault>
      <Box minH="60vh" width="80vw" mx="auto" py="10vh" mt="4rem">
        <Box mb="4rem">
          <VStack alignItems="flex-start">
            <Heading as="h1" size="2xl">
              title
            </Heading>
            <HStack
              width="100%"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
              fontSize="14px"
            >
              <Text color="gray.400">
                Posted by{" "}
                <Text as="a" href="mailto:supri.contact@gmail.com">
                  Supri
                </Text>
              </Text>
              <Text color="gray.400">10 Maret 2021</Text>
            </HStack>
          </VStack>
          <Box backgroundColor="yellow.400" my="2rem">
            <Image src="/images/production-1.png" alt="post-image" />
          </Box>
          <Text>
            Most websites implementing Disqus will want a way to display the
            comment count for each page with comments, on their home page. We
            offer an easy to use JavaScript code snippet which displays the
            number of comments for pages with Disqus embedded. Paste the
            following code at the bottom of the your index or home page, right
            before the closing. Change the shortname variable from EXAMPLE to
            whatever the shortname is of the forum youre using. Your shortname
            can also be found on your forums Admin Settings General page. On the
            index or home page, append #disqus_thread to the end of each article
            URL which appears inside the href tag for the article comments link.
            This will tell Disqus which links to look up so it can return the
            correct comment count.{" "}
          </Text>
        </Box>
        <DiscusComments />
      </Box>
    </LayoutDefault>
  );
};

export default PostSlug;
