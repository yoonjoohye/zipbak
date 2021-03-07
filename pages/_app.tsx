import React from 'react';
import Head from "next/head";
import Script from "./_script";
import GlobalStyle from "../public/assets/styles/Global.style";
import axios from 'axios';

const App=({ Component, pageProps }:any)=>{
  axios.defaults.baseURL = 'https://api-local.zipbak.site';
  return (
      <>
        <Head>
            <meta name="viewport" content="user-scalable=no,width=device-width,initial-scale=1.0,maximum-scale=1.0" />
            {/*<link href='https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css' />*/}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
            <Script />
        </Head>
        <GlobalStyle/>
        <Component {...pageProps}/>
      </>
  );
}

export default App
