import { useDataBackend } from "@/Components/context/DataContext";
import useScript from "@/Hooks/UseScript";
import LayoutDefault from "@/Layout/Default";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const BlogComponent = dynamic(() => import("components/blogPage"));

const BlogIndex = () => {
  const router = useRouter();
  const { blogs } = useDataBackend();
  const { loading, _, value } = useScript(
    "https://bengkel-bagus.disqus.com/count.js",
    "dsq-count-scr",
    [router]
  );

  return (
    <LayoutDefault title="Blogs | Bengkel Bagus">
      <BlogComponent blogs={blogs} />
    </LayoutDefault>
  );
};

export default BlogIndex;
