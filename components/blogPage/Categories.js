import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import Link from "next/link";

const CategoryLink = styled.p`
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: #222;
  }
`;

const Categories = () => {
  const categoryList = [
    { name: "Category 1", blog: [] },
    { name: "Category 2", blog: [] },
    { name: "Category 3", blog: [] },
    { name: "Category 4", blog: [] },
    { name: "Category 5", blog: [] },
  ];

  return (
    <VStack width="100%" alignItems="flex-start" gridGap="1rem">
      <Heading as="h4" size="md">
        Categories
      </Heading>
      <Divider />
      <VStack>
        {categoryList.map((data, index) => (
          <Link href={data.name.split(" ").join("")} passHref key={index}>
            <CategoryLink>
              {data.name} ({data.blog.length})
            </CategoryLink>
          </Link>
        ))}
      </VStack>
    </VStack>
  );
};

export default Categories;
