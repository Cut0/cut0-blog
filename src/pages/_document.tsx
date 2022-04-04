import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument<{}> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="/cut0-blog-ios.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/cut0-blog.png"
            rel="icon"
            sizes="192x192"
            type="image/png"
          />
          {/* <link href="/favicons/site.webmanifest" rel="manifest" /> */}
          {/* <link
            color="#000000"
            href="/favicons/safari-pinned-tab.svg"
            rel="mask-icon"
          /> */}
          <link href="/favicons/favicon.ico" rel="icon" />
          <link href="/favicons/favicon.ico" rel="shortcut icon" />
          <meta content="#2B2B2E" name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
