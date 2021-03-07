import React from 'react';
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import HomeIcon from '../../../public/assets/images/icn-home.svg';
import ProfileIcon from '../../../public/assets/images/icn-profile.svg';
import PencilIcon from '../../../public/assets/images/icn-pencil.svg';
import Icon from "../../atoms/Icon";
import Color from "../../../public/assets/styles/Color.style";
import {keyframes} from "@emotion/react";
import axios from "axios";

const Footer=styled.footer`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items:center;
  text-align: center;
  position:fixed;
  bottom:0;
  width:100%;
  background-color:#fff;
  padding:10px 0;
  border-top:1px solid #eee;
`
const Li=styled.li`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size:12px;
  font-weight:500;
`
const StyleSpan=styled.span`
  margin-top:5px;
`
const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: 10px;
  z-index:1;
  justify-content: center;
  align-items: center;
  background-color: ${Color.primary};
  border-radius: 50%;
  width: 60px;
  height: 60px;
`
export const ping = keyframes`
  0% {
    transform: scale(0.2);
    opacity: 0.8;
  }
  80% {
    transform: scale(1.8);
    opacity: 0;
  }
  100% {
    transform: scale(2.8);
    opacity: 0;
  }
`;
const Ping=styled.div`
  position: absolute;
  z-index: 0;
  width: 60px;
  height: 60px;
  bottom: 10px;
  border-radius: 50%;
  background-color: ${Color.primary};
  animation: ${ping} 0.8s ease-in-out infinite both;
`
interface IProps{
    user?:{
        id:string;
        socialId:number;
    }|null;
}
const Navigation=({user}:IProps)=>{
    const router=useRouter();

    const goLogout=async ()=>{
        try{
            const res=await axios.post('/user/logout',{},{withCredentials: true});
            if(res.status===200){
                router.push('/auth/login');
            }
        }catch(e){
            console.error(e);
        }

    }
    return(
        <Footer>
            <Li onClick={()=>router.push('/')}>
                <Icon src={HomeIcon}/>
                <StyleSpan>홈</StyleSpan>
            </Li>
            <Li onClick={()=>router.push('/post/write')}>
                <Ping />
                <IconWrapper>
                    <Icon src={PencilIcon} type="large"/>
                </IconWrapper>
            </Li>
            {
                user ?
                    <Li onClick={goLogout}>
                        <Icon src={ProfileIcon}/>
                        <StyleSpan>로그아웃</StyleSpan>
                    </Li>:
                    <Li onClick={() => router.push('/auth/login')}>
                        <Icon src={ProfileIcon}/>
                        <StyleSpan>로그인</StyleSpan>
                    </Li>
            }
        </Footer>
    )
}
export default Navigation;
