import { trimString } from "@/Utils/Helper";
import { Box, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/layout";

const LatestNewsSection = () => {
  const latestNews = [
    {
      image: "",
      title: "test",
      date: "10 Maret 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris rutrum, egestas mauris eget, iaculis ipsum. Fusce vehicula at turpis ut dignissim. Vivamus in enim sed sem elementum dictum. Maecenas in fermentum sapien. Quisque lacinia, nunc sed pulvinar mollis, dui nisi tempus felis, a mattis elit lacus et odio. Fusce ut sapien eget quam vulputate ullamcorper eget tristique massa. Donec eget lacus a odio imperdiet ultrices. Pellentesque sed aliquet metus. Quisque in elementum erat. Vivamus id volutpat sem. Curabitur eleifend sit amet diam a viverra.",
    },
    {
      image: "",
      title: "test",
      date: "10 Maret 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris rutrum, egestas mauris eget, iaculis ipsum. Fusce vehicula at turpis ut dignissim. Vivamus in enim sed sem elementum dictum. Maecenas in fermentum sapien. Quisque lacinia, nunc sed pulvinar mollis, dui nisi tempus felis, a mattis elit lacus et odio. Fusce ut sapien eget quam vulputate ullamcorper eget tristique massa. Donec eget lacus a odio imperdiet ultrices. Pellentesque sed aliquet metus. Quisque in elementum erat. Vivamus id volutpat sem. Curabitur eleifend sit amet diam a viverra.",
    },
    {
      image: "",
      title: "test",
      date: "10 Maret 2020",
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
      p="5%"
      gridGap="1rem"
    >
      <Heading as="h1" size="lg" color="yellow.400" fontWeight="light">
        The Blog
      </Heading>
      <Heading as="h1" size="xl">
        Latest News
      </Heading>
      <Divider borderColor="yellow.400" borderWidth="2px" width="150px" />
      <HStack
        width="100%"
        overflow="auto"
        mt="3rem"
        justifyContent="space-around"
      >
        {latestNews.map((data, index) => (
          <VStack alignItems="flex-start" w="250px" key={index}>
            <Box
              backgroundColor="yellow.400"
              backgroundImage={data.image}
              height="150px"
              width="100%"
            ></Box>
            <Heading as="h4" size="md">
              {data.title}
            </Heading>
            <Text color="gray">{data.date}</Text>
            <Text>{trimString(data.description, 100)}</Text>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
};

export default LatestNewsSection;
