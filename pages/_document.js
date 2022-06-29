import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-Bold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-SemiBold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
        <a className="ui orange tag label" href="https://github.com/21Ovi">
          Github | Other projects
        </a>
        <br />
        <a
          className="ui white tag label"
          href="https://www.linkedin.com/in/mohammad-ovesh-ansari-a3316818a/"
        >
          Contact Developer | LinkedIn
        </a>
        <br />
        <a className="ui green tag label">
          App By Mohammad Ovesh | Powered with Next js
        </a>
      </Html>
    );
  }
}

export default MyDocument;
