import ArticlesMiniCard from "@/Reusables/ArticlesMiniCard";
import { Box, Divider, Heading, HStack, VStack } from "@chakra-ui/layout";
import { useDataBackend } from "components/context/DataContext";

const RecommendedArticles = () => {
  const { blogs } = useDataBackend();

  if (blogs.length === 0) return null;
  return (
    <VStack width="100%" alignItems="flex-start" gridGap="1rem">
      <Heading as="h4" size="md">
        Recommended Articles
      </Heading>
      <Divider />
      {blogs
        .filter(({ rating }) => rating === 5)
        .slice(0, 4)
        .map((data, index) => (
          <ArticlesMiniCard
            key={index}
            id={data.id}
            image={data.featuredImage.url}
            title={data.title}
            date={new Date(data.published_at)}
            description={data.description}
          />
        ))}
    </VStack>
  );
};

export default RecommendedArticles;
