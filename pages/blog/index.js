import LayoutDefault from "@/Layout/Default";
import dynamic from "next/dynamic";
const BlogComponent = dynamic(() => import("components/blogPage"));

const BlogIndex = () => {
  return (
    <LayoutDefault>
      <BlogComponent />
    </LayoutDefault>
  );
};

export default BlogIndex;
