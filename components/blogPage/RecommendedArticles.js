import ArticlesMiniCard from "@/Reusables/ArticlesMiniCard";
import { Box, Divider, Heading, HStack } from "@chakra-ui/layout";

const RecommendedArticles = () => {
  const latestNews = [
    {
      image: "test",
      title: "test",
      date: new Date("2021-03-20"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris rutrum, egestas mauris eget, iaculis ipsum. Fusce vehicula at turpis ut dignissim. Vivamus in enim sed sem elementum dictum. Maecenas in fermentum sapien. Quisque lacinia, nunc sed pulvinar mollis, dui nisi tempus felis, a mattis elit lacus et odio. Fusce ut sapien eget quam vulputate ullamcorper eget tristique massa. Donec eget lacus a odio imperdiet ultrices. Pellentesque sed aliquet metus. Quisque in elementum erat. Vivamus id volutpat sem. Curabitur eleifend sit amet diam a viverra.",
    },
    {
      image: "test",
      title: "test",
      date: new Date("2021-03-20"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris rutrum, egestas mauris eget, iaculis ipsum. Fusce vehicula at turpis ut dignissim. Vivamus in enim sed sem elementum dictum. Maecenas in fermentum sapien. Quisque lacinia, nunc sed pulvinar mollis, dui nisi tempus felis, a mattis elit lacus et odio. Fusce ut sapien eget quam vulputate ullamcorper eget tristique massa. Donec eget lacus a odio imperdiet ultrices. Pellentesque sed aliquet metus. Quisque in elementum erat. Vivamus id volutpat sem. Curabitur eleifend sit amet diam a viverra.",
    },
  ];

  return (
    <Box display="flex" flexDir="column" gridGap="1rem">
      <Heading as="h4" size="md">
        Recommended Articles
      </Heading>
      <Divider />
      {latestNews.slice(0, 4).map((data, index) => (
        <ArticlesMiniCard
          key={index}
          image={data.image}
          title={data.title}
          date={data.date}
          description={data.description}
        />
      ))}
    </Box>
  );
};

export default RecommendedArticles;
