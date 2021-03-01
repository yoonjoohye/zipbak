import React from 'react';
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import Icon from "../../atoms/Icon";
import MsgIcon from '../../../public/assets/images/icn-message.svg';
import ProfileIcon from '../../../public/assets/images/icn-profile-01.svg';
import Label from "../../atoms/Label";
import dayjs from "dayjs";

const Wrapper=styled.article`
  width:100%;
  background: #fff;
  cursor:pointer;
`
const Header=styled.div`
  padding:20px 10px;
  display: flex;
  align-items: center;
`
const Body=styled.p`
  padding:0 10px;
  margin:0 0 20px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-break: break-word;
  line-height: 1.5;
`
const Footer=styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-top:1px dashed #eee;
  font-size:12px;
  color:#666;
  padding:15px 10px;
`
const Profile=styled.span`
  font-weight:600;
`
const StyleSpan=styled.span`
  margin-left:5px;
`
interface IProps{
    item:[];
    idx:number;
}
const PostItem=({item, idx}:IProps)=>{
    const router=useRouter();
    return(
        <Wrapper onClick={()=>router.push(`/post/${item?.id}`)}>
            <Header>
                <Profile><Icon src={`https://cdn.zipbak.site/${item?.profile}`}/> 익명</Profile>
                <StyleSpan><Label label={item?.category} type="category"/></StyleSpan>
                {
                    item?.emotion && <StyleSpan><Label label={item?.emotion} type="emotion"/></StyleSpan>
                }
                {
                    item?.target && <StyleSpan><Label label={`${item?.target}층 제발 멈춰주세요.`} type="info"/></StyleSpan>
                }
                {
                    item?.room && <StyleSpan><Label label={`${item?.room}층`} type="info"/></StyleSpan>
                }

            </Header>
            <Body>
                {item?.content}
            </Body>
            <Footer>
                <div><Icon src={MsgIcon} /> 11</div>
                <div>{dayjs(item?.createdAt).format('YYYY/MM/DD')}</div>
            </Footer>
        </Wrapper>
    )
}
export default PostItem;
