import { useEffect } from "react";

const DiscusComments = () => {
  useEffect(() => {
    var d = document,
      s = d.createElement("script");
    s.src = "https://bengkel-bagus.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  }, []);

  return <div id="disqus_thread"></div>;
};

export default DiscusComments;
