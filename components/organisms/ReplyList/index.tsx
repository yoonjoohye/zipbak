import React from "react";
import ReplyItem from "../../molecules/ReplyItem";
import styled from "@emotion/styled";
import ReplyInput from "../../molecules/ReplyInput";

const Wrapper = styled.article`
  padding: 15px 10px;
  height:30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color:#666;
`;


interface IProps{
    postList:any;
    reply:string,
    changeReply:(e: React.ChangeEvent<HTMLTextAreaElement>)=>void;
    uploadReply:()=>void;
    replyList:{
       [key:string]:any;
    };
    moreReply:()=>void;
}
const ReplyList=({postList, reply, changeReply, uploadReply, replyList, moreReply}:IProps)=>{
    return(
        <>
            {
                replyList?.count > 0 ? replyList?.list.map((item:[], idx: number) => (
                    <ReplyItem key={idx} userId={postList?.userId} item={item} idx={idx} moreReply={moreReply}/>
                )):
                    <Wrapper>
                        🥺<br/>
                        댓글이 비어있어요!<br/>
                            과연 첫번째 댓글은 누가 차지할까요? :)
                    </Wrapper>
            }
            <ReplyInput reply={reply} changeReply={changeReply} uploadReply={uploadReply}/>
        </>
    )
}
export default ReplyList;
