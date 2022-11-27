import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Writer-PRO" key="title"/>
        <meta property="og:description" content="Super-powered AI-Writing Assistant" key="description"/>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dowfglddo/image/upload/v1669575369/Writer_PRO_o5peds.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
