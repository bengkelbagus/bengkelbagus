import useAsync from "./UseAsync";

export default function useScript(url, id = "", dependencies) {
  return useAsync(() => {
    const script = document.createElement("script");
    script.id = id;
    script.src = url;
    script.async = true;

    return new Promise((resolve, reject) => {
      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);
      document.body.appendChild(script);
    });
  }, [url, ...dependencies]);
}
