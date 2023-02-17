import { Html, Head, Main, NextScript } from "next/document"

function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Portfolio (Richard)" />
        <meta property="og:image" content="/preview-image.png" />
        <meta property="og:description" content="Hi! I'm richard and this is my portfolio" />
        <meta property="og:url" content="https://shoonkey.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Roboto+Slab:wght@400;700&family=Cabin:ital,wght@0,400;0,700;1,400&family=Martian+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
