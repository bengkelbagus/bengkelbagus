import LayoutDefault from "@/Layout/Default";
import ArticlesCard from "@/Reusables/ArticlesCard";
import ArticlesHorizontalCard from "@/Reusables/ArticlesHorizontalCard";
import { Box, Divider, Grid, Heading, HStack, VStack } from "@chakra-ui/layout";
import Categories from "./Categories";
import RecommendedArticles from "./RecommendedArticles";

const BlogComponent = () => {
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
    <Box minH="60vh" p="5%" mt="4rem">
      <Box
        px="10%"
        pt="2rem"
        pb="5rem"
        display="flex"
        alignItems="center"
        flexDir="column"
        gridGap="1rem"
      >
        <Heading as="h1" size="lg" color="yellow.400">
          Blog
        </Heading>
        <Heading as="h1" size="xl" color="black">
          Upgrade your knowledge
        </Heading>
        <Divider borderColor="yellow.400" borderWidth="2px" width="100px" />
      </Box>
      <HStack
        mx="auto"
        maxWidth="80vw"
        gridGap="5%"
        alignItems="flex-start"
        flexWrap="wrap"
      >
        <VStack flex="1" minW="400px" width="100%" gridGap="1rem">
          {latestNews.map((data, index) => (
            <Box key={index}>
              <ArticlesHorizontalCard
                image={data.image}
                title={data.title}
                date={data.date}
                description={data.description}
              />
            </Box>
          ))}
        </VStack>
        <VStack
          flex="0.4"
          minWidth="300px"
          position="sticky"
          top="10vh"
          height="fit-content"
          gridGap="1rem"
        >
          <RecommendedArticles />
          <Categories />
        </VStack>
      </HStack>
    </Box>
  );
};

export default BlogComponent;
