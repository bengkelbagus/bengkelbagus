import useAsync from "./UseAsync";

export default function useScript({ url, id }) {
  return useAsync(() => {
    const script = document.createElement("script");
    if (id) script.id = id;
    script.src = url;
    script.async = true;

    return new Promise((resolve, reject) => {
      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);
      document.body.appendChild(script);
    });
  }, [url]);
}
