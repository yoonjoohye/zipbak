import React from 'react';
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import Icon from "../../atoms/Icon";
import MsgIcon from '../../../public/assets/images/icn-message.svg';
import ProfileIcon from '../../../public/assets/images/icn-profile-01.svg';
import Label from "../../atoms/Label";
import dayjs from "dayjs";

const Wrapper = styled.article`
  width: 100%;
  background: #fff;
  cursor: pointer;
  box-shadow: 0px 0px 10px #0000001c;
`
const Header = styled.div`
  padding: 20px 10px;
  display: flex;
  align-items: center;
`
const Body = styled.div`
  padding: 0 10px;
  margin: 0 0 20px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-word;
  line-height: 1.5;
  font-size:16px;
  height:80px;
`
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px dashed #eee;
  font-size: 12px;
  color: #666;
  padding: 15px 10px;
`
const Profile = styled.div`
  font-weight: 500;
`
const Title = styled.p`
  font-style: italic;
  font-size: 1.2em;
  margin-bottom: 10px;
`
const HighLight=styled.span`
  font-weight:700;
  display: inline-block;
  position: relative;
  z-index:0;
  &:after {
    content: "";
    width:100%;
    height: 12px;
    display: inline-block;
    background: #ffb7008c;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`
const StyleSpan = styled.div`
  margin: 0 10px 0 0;
`

interface IProps {
    item: [];
    idx: number;
}

const PostItem = ({item, idx}: IProps) => {
    const router = useRouter();
    return (
        <Wrapper onClick={() => router.push(`/post/${item?.id}`)}>
            <Header>
                {/*<Profile><Icon src={`https://cdn.zipbak.site/${item?.profile}`}/> 익명</Profile>*/}
                <StyleSpan><Label label={item?.category} type="category"/></StyleSpan>
                {
                    item?.emotion && <Label label={item?.emotion} type="emotion"/>
                }
            </Header>
            <Body>
                {
                    item?.room && <Title><HighLight>{item?.room}호에 사는 사람입니다.</HighLight></Title>
                }
                {
                    item?.target && <Title><HighLight>이 글은 {item?.target}층 거주자에게 전달드립니다.</HighLight></Title>
                }
                {item?.content}
            </Body>
            <Footer>
                <div><Icon src={MsgIcon} type="small"/> {item?.reply_count}</div>
                <div>{dayjs(item?.createdAt).format('YYYY/MM/DD')}</div>
            </Footer>
        </Wrapper>
    )
}
export default PostItem;
