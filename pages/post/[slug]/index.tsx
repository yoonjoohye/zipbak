import React, {useState} from 'react';
import {useRouter} from "next/router";
import styled from "@emotion/styled";
import Head from "next/head";
import Container from "../../../components/templates/Container";
import Icon from "../../../components/atoms/Icon";
import ArrowIcon from "../../../public/assets/images/icn-arrow-right.svg";
import Color from "../../../public/assets/styles/Color.style";
import ReplyList from "../../../components/organisms/ReplyList";
import PostDetail from "../../../components/organisms/PostDetail";
import useSWR from "swr";

const Wrapper = styled.main`
  padding-top: 3.5em;
  padding-bottom: 5em;
`
const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #eee;
  padding: 10px;
  background: #fff;
  width: -webkit-fill-available;
`
const WriteWrapper = styled.div`
  background-color: #eee;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`
const StyleTextarea = styled.textarea`
  width: 100%;
  font-size: 16px;
  padding-left: 10px;
`
const StyleButton = styled.button`
  word-break: keep-all;
  border-radius: 50px;
  background: ${Color.primary};
  width: 25px;
  height: 25px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const fetcher = (url:string) => fetch(url).then(r => r.json())

const Post = () => {
    const router = useRouter();
    const {slug} = router.query;
    const { data:postList } = useSWR(`https://api-dev.zipbak.site/post/${slug}`,fetcher);
    const { data:replyList } = useSWR(`https://api-dev.zipbak.site/reply?limit=100&postId=${slug}`,fetcher);
    const [reply, setReply] = useState('');

    console.log(postList);
    console.log(replyList);

    const changeReply = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = '16px';
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

    return (
        <>
            <Head>
                <title>집박구리 | 상세페이지</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Container type="detail" navigation={false}>
                <Wrapper>
                    <PostDetail postList={postList} moreBoard={moreBoard}/>
                    <ReplyList replyList={replyList} moreReply={moreReply}/>
                    <Footer>
                        <WriteWrapper>
                            <StyleTextarea rows={1} placeholder="댓글을 입력해주세요;)" value={reply} onChange={changeReply}/>
                            {
                                reply.length > 0 && <StyleButton><Icon src={ArrowIcon}/></StyleButton>
                            }
                        </WriteWrapper>
                    </Footer>
                </Wrapper>
            </Container>
        </>
    )
}
export default Post;
