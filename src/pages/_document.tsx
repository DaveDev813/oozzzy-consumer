import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="all,follow" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css"
          />

          <link
            rel="stylesheet"
            href="../static/sampleTemplate/distribution/dist/vendor/nouislider/nouislider.css"
          />
          <link
            rel="stylesheet"
            href="../static/sampleTemplate/distribution/dist/vendor/magnific-popup/magnific-popup.css"
          />
          <link
            rel="stylesheet"
            href="../static/sampleTemplate/distribution/dist/css/style.default.css"
            id="theme-stylesheet"
          />
          <Head />
        </head>
        <body className="app">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
