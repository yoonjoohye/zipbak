import Icon from "../../atoms/Icon";
// @ts-ignore
import ArrowIcon from "../../../public/assets/images/icn-send.svg";
import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #eee;
  padding: 10px;
  background: #fff;
  width: -webkit-fill-available;
  width: -moz-available;
`
const WriteWrapper = styled.div`
  background-color: #eee;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyleTextarea = styled.textarea`
  width: 100%;
  padding-left: 10px;
`
interface IProps{
    reply:string;
    changeReply:(e: React.ChangeEvent<HTMLTextAreaElement>)=>void;
    uploadReply:()=>void;
}
const ReplyInput=({reply, changeReply, uploadReply}:IProps)=>{
    return(
        <Wrapper>
            <WriteWrapper>
                <StyleTextarea rows={1} placeholder="댓글을 입력해주세요;)" value={reply} onChange={changeReply}/>
                {
                    reply.length > 0 && <Icon src={ArrowIcon} type="large" click={uploadReply}/>
                }
            </WriteWrapper>
        </Wrapper>
    )
}
export default ReplyInput;
