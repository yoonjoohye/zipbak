import React from 'react';
import Head from "next/head";
import Script from "./_script";
import GlobalStyle from "../public/assets/styles/Global.style";

const App=({ Component, pageProps })=>{
  return (
      <>
        <Head>
          <Script />
        </Head>
        <GlobalStyle/>
        <Component {...pageProps}/>
      </>
  );
}

export default App
