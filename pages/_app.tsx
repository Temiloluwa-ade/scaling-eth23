import "../styles/globals.css";
import "../styles/Home.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  
  const once = React.useRef<boolean>(true);
  


  return (
    <>

      <Component {...pageProps} />

     
    </>
  );
}

export default MyApp;
