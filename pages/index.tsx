import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from "@emotion/styled";
import Carousel from "../components/atoms/Carousel";
import PostList from "../components/organisms/PostList";
import Container from "../components/templates/Container";
import Banner1 from '../public/assets/images/banner1.jpg';
import Banner2 from '../public/assets/images/banner2.jpg';
import Banner3 from '../public/assets/images/banner3.png';
import Color from "../public/assets/styles/Color.style";
import useSWR from "swr";
import axios from "axios";

const Wrapper=styled.main`
  padding-top:3.5em;
  padding-bottom: 80px;
  min-height:100vh;
  height:100%;
  //background: ${Color.background};
`
const postFetcher = (url:string) => fetch(url).then(r => r.json())
const userFetcher = (url:string) => axios.get(url,{ withCredentials: true }).then(res => res.data)
const Index=()=> {
  const { data:postData } = useSWR('https://api-local.zipbak.site/post?limit=100',postFetcher);
  const { data:userData, error } = useSWR('https://api-local.zipbak.site/user/me',userFetcher);

  const imgUrl=[Banner1, Banner2, Banner3];
  const [postList, setPostList]=useState({});
  const [user, setUser]=useState(null);

    useEffect(()=>{
      if(postData){
          setPostList(postData);
      }
  },[postData]);

    useEffect(()=>{
        if(!error){
            setUser(userData);
            console.log(userData);
        } else {
            console.log(error);
        }
    },[userData]);

  return (
    <>
      <Head>
        <title>집박구리 | 오늘은 누구집이고</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container user={user}>
          <Wrapper>
              <Carousel imgUrl={imgUrl}/>
              <PostList postList={postList}/>
          </Wrapper>
      </Container>
    </>
  )
}

export default Index
