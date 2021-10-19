import useScript from "@/Hooks/UseScript";
import LayoutDefault from "@/Layout/Default";
import dynamic from "next/dynamic";
const BlogComponent = dynamic(() => import("components/blogPage"));

const BlogDate = () => {
  const { loading, _, value } = useScript({
    url: "https://bengkel-bagus.disqus.com/count.js",
    id: "dsq-count-scr",
  });

  return (
    <LayoutDefault>
      <BlogComponent />
    </LayoutDefault>
  );
};

export default BlogDate;
