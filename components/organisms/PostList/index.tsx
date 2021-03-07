import React from 'react';
import PostItem from "../../molecules/PostItem";
import styled from "@emotion/styled";
import {media} from "../../../public/assets/styles/Media.style";

const Wrapper=styled.div`
  padding:10px 0;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap:1em;
  ${media.md`
      grid-template-columns: 1fr 1fr 1fr;
  `};
  ${media.sm`
    grid-template-columns: 1fr;
  `};
`

const EmptyWrapper = styled.article`
  padding: 15px 10px;
  height:30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color:#666;
`;


interface IProps{
    postList: {
        count:number;
        list:[];
    } | null
}
const PostList=({postList}:IProps)=>{
    return(
        <Wrapper>
            {
                postList ? postList?.list?.map((item:[], idx:number)=>(
                    <PostItem key={idx} item={item} idx={idx}/>
                )):
                    <EmptyWrapper>
                    🥺<br/>
                    게시글이 비어있어요!<br/>
                    과연 첫번째 게시글은 누가 차지할까요? :)
                    </EmptyWrapper>
            }
        </Wrapper>
    )
}
export default PostList;
