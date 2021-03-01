import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import styled from "@emotion/styled";
import axios from "axios";
import useSWR from "swr";
import Head from "next/head";
import ArrowIcon from "../../../public/assets/images/icn-arrow-right.svg";
import Container from "../../../components/templates/Container";
import Icon from "../../../components/atoms/Icon";
import Color from "../../../public/assets/styles/Color.style";
import ReplyList from "../../../components/organisms/ReplyList";
import PostDetailItem from "../../../components/molecules/PostDetailItem";

const Wrapper = styled.main`
  padding-top: 3.5em;
  padding-bottom: 5em;
`

const fetcher = (url:string) => fetch(url).then(r => r.json())

const Post = () => {
    const router = useRouter();
    const {slug} = router.query;

    const { data:postData } = useSWR(`https://api-dev.zipbak.site/post/${slug}`,fetcher);
    const { data:replyData } = useSWR(`https://api-dev.zipbak.site/reply?limit=100&postId=${slug}`,fetcher);

    const [reply, setReply] = useState('');
    const [postList, setPostList]=useState({});
    const [replyList, setReplyList]=useState({});

    useEffect(()=>{
        if(postData) {
            setPostList(postData);
        }
    },[postData]);

    useEffect(()=>{
        if(replyData) {
            setReplyList(replyData);
        }
    },[replyData]);

    // useEffect(()=>{
    //     e.target.style.height = 'auto';
    //     e.target.style.height = e.target.scrollHeight + 'px';
    // },[reply]);

    console.log(postList);
    console.log(replyList);

    const changeReply = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
        setReply(e.target.value);
        console.log(e.target.value);
    }
    const moreBoard = () => {
        alert('asdddf');
    }
    const moreReply = () => {
        alert('asdf');
    }
    const uploadReply=async ()=>{
        try{
            const res=await axios.post('https://api-dev.zipbak.site/reply',{
                content:reply,
                postId:slug
            },{ withCredentials: true });
            console.log(res);
            if(res.status===201){
                const list=replyData?.list;
                list.unshift(res.data);
                const count=replyData?.count+1;
                setReplyList({count, list});
                setReply('');
            }
        }catch(e){
            console.error(e);
        }
    }

    return (
        <>
            <Head>
                <title>집박구리 | 상세페이지</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Container type="detail" navigation={false}>
                <Wrapper>
                    <PostDetailItem postList={postList} moreBoard={moreBoard}/>
                    <ReplyList reply={reply} changeReply={changeReply} uploadReply={uploadReply} replyList={replyList} moreReply={moreReply}/>
                </Wrapper>
            </Container>
        </>
    )
}
export default Post;
