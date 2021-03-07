import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import styled from "@emotion/styled";
import Carousel from "../components/atoms/Carousel";
import PostList from "../components/organisms/PostList";
import Container from "../components/templates/Container";
// @ts-ignore
import Banner1 from '../public/assets/images/banner1.jpg';
// @ts-ignore
import Banner2 from '../public/assets/images/banner2.jpg';
// @ts-ignore
import Banner3 from '../public/assets/images/banner3.png';
import useSWR from "swr";
import axios from "axios";
import {getBaseUrl} from "../utils/getBaseUrl";

const Wrapper = styled.main`
  padding-top: 3.5em;
  padding-bottom: 80px;
  min-height: 100vh;
  height: 100%;
`
const postFetcher = (url: string) => fetch(url).then(r => r.json())
const userFetcher = (url: string) => axios.get(url, {withCredentials: true}).then(res => res.data)
const Index = () => {
    const {data: userData, error} = useSWR(`${getBaseUrl()}/user/me`, userFetcher);
    const {data: postData} = useSWR(`${getBaseUrl()}/post?limit=100`, postFetcher);
    const imgUrl = [Banner1, Banner2, Banner3];
    const [postList, setPostList] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (postData) {
            setPostList(postData);
        }
    }, [postData]);

    useEffect(() => {
        if (!error) {
            setUser(userData);
            console.log(userData);
        } else {
            console.log(error);
        }
    }, [userData]);

    return (
        <>
            <Head>
                <title>집박구리 | 오늘은 누구집이고</title>
                <link rel="icon" href="/favicon.ico"/>
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
