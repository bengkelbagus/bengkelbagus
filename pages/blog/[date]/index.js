import { useDataBackend } from "@/Components/context/DataContext";
import useScript from "@/Hooks/UseScript";
import LayoutDefault from "@/Layout/Default";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const BlogComponent = dynamic(() => import("components/blogPage"));

const BlogIndex = () => {
  const { blogs } = useDataBackend();
  const router = useRouter();
  const { query } = router;
  const { date } = query;
  const { loading, _, value } = useScript(
    "https://bengkel-bagus.disqus.com/count.js",
    "dsq-count-scr",
    [router]
  );

  const blogsFormatted = blogs.filter(
    ({ published_at }) =>
      new Date(published_at).toISOString().split("T")[0] === date
  );

  return (
    <LayoutDefault title="Blogs | Bengkel Bagus">
      <BlogComponent blogs={blogsFormatted} />
    </LayoutDefault>
  );
};

export default BlogIndex;
