import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from "@emotion/styled";
import Carousel from "../components/molecules/Carousel";
import PostList from "../components/organisms/PostList";
import Container from "../components/templates/Container";
import Banner1 from '../public/assets/images/banner1.jpg';
import Banner2 from '../public/assets/images/banner2.jpg';
import Banner3 from '../public/assets/images/banner3.png';
import Color from "../public/assets/styles/Color.style";
import useSWR from "swr";

const Wrapper=styled.main`
  padding-top:3.5em;
  padding-bottom: 80px;
  min-height:100vh;
  height:100%;
  background: ${Color.background};

`
const fetcher = (url:string) => fetch(url).then(r => r.json())

const Index=()=> {
  const router=useRouter();
  const { data:list, error } = useSWR('https://api-dev.zipbak.site/post?limit=100',fetcher);

  console.log(list);

  const imgUrl=[Banner1, Banner2, Banner3];

  return (
    <>
      <Head>
        <title>집박구리 | 오늘은 누구집이고</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
          <Wrapper>
              <Carousel imgUrl={imgUrl}/>
              <PostList list={list}/>
          </Wrapper>
      </Container>
    </>
  )
}

export default Index
