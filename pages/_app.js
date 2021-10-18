import "../styles/globals.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useEffect } from "react";

const theme = extendTheme({
  colors: {
    accent: {
      100: "#fc586c",
      200: "#f54e62",
      300: "#f54055",
      400: "#f72d45",
      500: "#ef233c",
      600: "#db1f36",
      700: "#cc182e",
      800: "#bf1328",
      900: "#bf1328",
    },
  },
  fonts: {
    heading: "poppins",
    body: "poppins",
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then(
        function (registration) {
          console.log(
            "Service Worker registration successful with scope: ",
            registration.scope
          );
        },
        function (err) {
          console.log("Service Worker registration failed: ", err);
        }
      );
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
