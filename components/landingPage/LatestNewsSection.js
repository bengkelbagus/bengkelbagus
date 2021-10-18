import ArticlesCard from "@/Reusables/ArticlesCard";
import {
  CarouselItem,
  GliderCarousel,
} from "@/Reusables/gliderJS/GliderCarousel";
import { trimString } from "@/Utils/Helper";
import { Box, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/layout";

const LatestNewsSection = () => {
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
  ];

  return (
    <Box
      minH="40vh"
      display="flex"
      flexDir="column"
      alignItems="center"
      px="5%"
      py="10vh"
      gridGap="1rem"
    >
      <Heading as="h1" size="lg" color="yellow.400" fontWeight="light">
        The Blog
      </Heading>
      <Heading as="h1" size="xl">
        Latest News
      </Heading>
      <Divider borderColor="yellow.400" borderWidth="2px" width="150px" />
      <HStack width="100%" mt="3rem">
        <GliderCarousel isArrow>
          {latestNews.map((data, index) => (
            <CarouselItem key={index}>
              <ArticlesCard
                image={data.image}
                title={data.title}
                date={data.date}
                description={data.description}
              />
            </CarouselItem>
          ))}
        </GliderCarousel>
      </HStack>
    </Box>
  );
};

export default LatestNewsSection;
