import { FRONTEND_URL } from "@/Utils/Constants";
import { dateFormat, trimString } from "@/Utils/Helper";
import { VStack, Box, Heading, Text } from "@chakra-ui/layout";
import Link from "next/link";

const ArticlesCard = ({ image, title, date, description }) => {
  if (!image || !title || !date || !description) return null;

  return (
    <Link
      href={
        FRONTEND_URL + "/post/" + title + "-" + date.toISOString().split("T")[0]
      }
      passHref
    >
      <VStack alignItems="flex-start" w="100%">
        <Box
          backgroundColor="yellow.400"
          backgroundImage={image}
          height="150px"
          width="100%"
        ></Box>
        <Heading as="h4" size="md">
          {title}
        </Heading>
        <Text color="gray">{dateFormat(date)}</Text>
        <Text height="100px">{trimString(description, 100)}</Text>
      </VStack>
    </Link>
  );
};

export default ArticlesCard;
