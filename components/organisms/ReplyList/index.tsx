import React from "react";
import ReplyItem from "../../molecules/ReplyItem";
import styled from "@emotion/styled";
import Icon from "../../atoms/Icon";
import ArrowIcon from "../../../public/assets/images/icn-arrow-right.svg";
import Color from "../../../public/assets/styles/Color.style";

const Wrapper = styled.article`
  padding: 15px 10px;
  height:30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color:#666;
`;
const Footer = styled.div`
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

interface IProps{
    reply:string,
    changeReply:()=>void;
    uploadReply:()=>void;
    replyList:{
        count:number;
        list:[];
    }
    moreReply:()=>void;
}
const ReplyList=({reply, changeReply, uploadReply, replyList, moreReply}:IProps)=>{
    return(
        <>
            {
                replyList?.count > 0 ? replyList?.list.map((item:[], idx: number) => (
                    <ReplyItem key={idx} item={item} idx={idx} moreReply={moreReply}/>
                )):
                    <Wrapper>
                        🥺<br/>
                        아직 댓글이 없어요!<br/>
                            과연 첫번째 댓글은 누가 차지할까요? :)
                    </Wrapper>
            }

            <Footer>
                <WriteWrapper>
                    <StyleTextarea rows={1} placeholder="댓글을 입력해주세요;)" value={reply} onChange={changeReply}/>
                    {
                        reply.length > 0 && <StyleButton onClick={uploadReply}><Icon src={ArrowIcon}/></StyleButton>
                    }
                </WriteWrapper>
            </Footer>
        </>
    )
}
export default ReplyList;
