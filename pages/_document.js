/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <script
            src="https://apis.google.com/js/platform.js"
            async
            defer
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="//code.tidio.co/xmo62vk11q8ivkkwyluuejxbcsligg2b.js"
            async
          ></script>
          <script
            id="dsq-count-scr"
            src="//bengkel-bagus.disqus.com/count.js"
            async
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
