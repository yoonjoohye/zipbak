import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import styled from "@emotion/styled";
import axios from "axios";
import useSWR from "swr";
import Head from "next/head";
import Container from "../../../components/templates/Container";
import ReplyList from "../../../components/organisms/ReplyList";
import PostDetail from "../../../components/molecules/PostDetail";

const Wrapper = styled.main`
  padding-top: 3.5em;
  padding-bottom: 5em;
`

const fetcher = (url: string) => fetch(url).then(r => r.json())
const userFetcher = (url: string) => axios.get(url, {withCredentials: true}).then(res => res.data)

const Post = () => {
    const router = useRouter();
    const {slug} = router.query;
    const {data: userData, error} = useSWR('https://api-local.zipbak.site/user/me', userFetcher);
    const {data: postData} = useSWR(`https://api-local.zipbak.site/post/${slug}`, fetcher);
    const {data: replyData} = useSWR(`https://api-local.zipbak.site/reply?limit=100&postId=${slug}`, fetcher);
    const [user, setUser] = useState(null);
    const [reply, setReply] = useState('');
    const [postList, setPostList] = useState({});
    const [replyList, setReplyList] = useState({});

    useEffect(() => {
        if (postData) {
            setPostList(postData);
        }
    }, [postData]);

    useEffect(() => {
        if (replyData) {
            setReplyList(replyData);
        }
    }, [replyData]);

    // useEffect(()=>{
    //     e.target.style.height = 'auto';
    //     e.target.style.height = e.target.scrollHeight + 'px';
    // },[reply]);

    // console.log(postList);
    // console.log(replyList);

    const changeReply = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
        setReply(e.target.value);
        console.log(e.target.value);
    }
    const moreBoard = () => {
        alert('coming soon');
    }
    const moreReply = () => {
        alert('coming soon');
    }
    const uploadReply = async () => {
        if(!error){
            setUser(userData);
            console.log(userData);
            try {
                const res = await axios.post('/reply', {
                    content: reply,
                    postId: slug
                }, {withCredentials: true});
                console.log(res);
                if (res.status === 201) {
                    const list = replyData?.list;
                    list.unshift(res.data);
                    const count = replyData?.count + 1;
                    setReplyList({count, list});
                    setReply('');
                }
            } catch (e) {
                console.error(e);
            }
        } else {
            router.push('/auth/login');
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
                    <PostDetail postList={postList} moreBoard={moreBoard}/>
                    <ReplyList postList={postList} reply={reply} changeReply={changeReply} uploadReply={uploadReply} replyList={replyList}
                               moreReply={moreReply}/>
                </Wrapper>
            </Container>
        </>
    )
}
export default Post;
