import LayoutDefault from "@/Layout/Default";
import ArticlesCard from "@/Reusables/ArticlesCard";
import { Box, Divider, Grid, Heading, VStack } from "@chakra-ui/layout";
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
    <LayoutDefault>
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
        <Grid
          mx="auto"
          maxWidth="60vw"
          gridTemplateColumns="60% 40%"
          gridGap="5%"
        >
          <VStack>
            {latestNews.map((data, index) => (
              <ArticlesCard
                key={index}
                image={data.image}
                title={data.title}
                date={data.date}
                description={data.description}
              />
            ))}
          </VStack>
          <VStack position="sticky" top="10vh" height="fit-content">
            <RecommendedArticles />
          </VStack>
        </Grid>
      </Box>
    </LayoutDefault>
  );
};

export default BlogComponent;
