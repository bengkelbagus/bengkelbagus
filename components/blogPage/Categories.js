import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import { useDataBackend } from "components/context/DataContext";
import Link from "next/link";

const CategoryLink = styled.p`
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: #222;
  }
`;

const Categories = () => {
  const { categories } = useDataBackend();

  if (categories.length === 0) return null;
  return (
    <VStack width="100%" alignItems="flex-start" gridGap="1rem">
      <Heading as="h4" size="md">
        Categories
      </Heading>
      <Divider />
      <VStack>
        {categories.map((data, index) => (
          <Link href={data.name.split(" ").join("")} passHref key={index}>
            <CategoryLink>
              <Text as="span" textTransform="capitalize">
                {data.name}
              </Text>{" "}
              ({data.blogs.length})
            </CategoryLink>
          </Link>
        ))}
      </VStack>
    </VStack>
  );
};

export default Categories;
