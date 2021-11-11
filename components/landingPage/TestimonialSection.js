import useWindowSize from "@/Hooks/UseWindowSize";
import { Box, Divider, Grid, Heading, HStack, Text } from "@chakra-ui/layout";
import { useDataBackend } from "components/context/DataContext";

const TestimonialSection = () => {
  const { testimonials } = useDataBackend();
  const { isTabletDisplay, isMobileDisplay } = useWindowSize();

  console.log(testimonials);
  if (testimonials.length === 0) return null;
  return (
    <Box
      id="testimonial"
      minH="60vh"
      px={isMobileDisplay ? "5%" : "10%"}
      pt="15vh"
      pb="20vh"
      backgroundColor="blackAlpha.900"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDir="column"
        gridGap="1rem"
        textAlign="center"
      >
        <Heading as="h1" size="lg" color="yellow.400">
          Testimonials
        </Heading>
        <Heading as="h1" size="xl" color="white">
          What they say about us
        </Heading>
        <Divider borderColor="yellow.400" borderWidth="2px" width="100px" />
      </Box>
      <Grid
        mx="auto"
        mt="4rem"
        gridGap="4rem"
        gridTemplateColumns={
          isTabletDisplay ? "1fr" : "repeat(auto-fit, minmax(200px, 1fr))"
        }
      >
        {testimonials.slice(0, 3).map((data, index) => (
          <Box
            mx="auto"
            minWidth="200px"
            position="relative"
            borderWidth="1px"
            p="2rem"
            color="white"
            key={index}
            mb={isTabletDisplay ? "128px" : ""}
          >
            <Text mb="4rem" textAlign="center">
              {data.caption}
            </Text>
            <Box
              width="80%"
              position="absolute"
              color="black"
              p="1rem"
              bottom="-8rem"
              left="50%"
              transform="translateX(-50%)"
              textAlign="center"
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <Box
                width="128px"
                height="128px"
                borderRadius="full"
                backgroundImage={data.client.image ? data.client.image.url : ""}
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                backgroundColor="yellow.400"
                mb="1rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {!data.client.image && (
                  <Text fontSize="32px" fontWeight="bold">
                    {data.client.name.split(" ").map((data) => data[0])}
                  </Text>
                )}
              </Box>
              <Heading as="h4" size="sm" color="white">
                {data.client.name}
              </Heading>
              <Text color="yellow.400">{data.client.company}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialSection;
