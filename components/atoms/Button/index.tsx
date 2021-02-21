import React from 'react';
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import KakaoImg from '../../../public/assets/images/btn-kakao.png';
const Btn=styled.button`
  ${props => props.type === "kakao" && css`
    background: url(${KakaoImg});
    background-size: contain;
    background-repeat: no-repeat;
    width:100%;
    height:60px;
  `};
  ${props=>props.type==="float" && css`
    position:fixed;
    bottom:12%;
    right:5%;
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
    width:50px;
    height:50px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgb(0,0,0,0.2);
  `};
  ${props => props.type ==="default" && css`
    //background:#ff0000;
    color:#fff;
    width:100px;
    height:50px;
  `};
  &:focus{
    outline:none;
  }
`

const Button=({type, onButton}: any)=>{
    return(
        <Btn type={type} onClick={onButton} />
    )
}
export default Button;
