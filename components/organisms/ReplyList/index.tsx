import React from "react";
import ReplyItem from "../../molecules/ReplyItem";
import styled from "@emotion/styled";
import Icon from "../../atoms/Icon";
import ArrowIcon from "../../../public/assets/images/icn-arrow-right.svg";
import Color from "../../../public/assets/styles/Color.style";
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
    userId:string;
    reply:string,
    changeReply:()=>void;
    uploadReply:()=>void;
    replyList:{
        count:number;
        list:[];
    }
    moreReply:()=>void;
}
const ReplyList=({userId, reply, changeReply, uploadReply, replyList, moreReply}:IProps)=>{
    return(
        <>
            {
                replyList?.count > 0 ? replyList?.list.map((item:[], idx: number) => (
                    <ReplyItem key={idx} userId={userId} item={item} idx={idx} moreReply={moreReply}/>
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
