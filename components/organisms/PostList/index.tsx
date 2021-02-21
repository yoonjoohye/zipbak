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
interface IProps{
    list: {
        count:number;
        list:[];
    }
}
const PostList=({list}:IProps)=>{
    return(
        <Wrapper>
            {
                list?.list.map((item:[], idx:number)=>(
                    <PostItem key={idx} item={item} idx={idx}/>
                ))
            }
        </Wrapper>
    )
}
export default PostList;
