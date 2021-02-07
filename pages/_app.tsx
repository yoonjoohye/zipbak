import React from 'react';
import Head from "next/head";
import Script from "./_script";
import Layout from "./_layout";
import GlobalStyle from "../public/assets/styles/Global.style";

const App=({ Component, pageProps })=>{
  return (
      <>
        <Head>
          <Script />
        </Head>
        <GlobalStyle/>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
      </>
  );
}

export default App
