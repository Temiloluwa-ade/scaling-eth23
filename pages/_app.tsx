import "../styles/globals.css";
import "../styles/Home.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { AppProps } from "next/app";
import React from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  
  const once = React.useRef<boolean>(true);
  

  // analytics.identify()

  return (
    <>

      <Component {...pageProps} />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
`,
        }}
      />
    </>
  );
}

export default MyApp;
