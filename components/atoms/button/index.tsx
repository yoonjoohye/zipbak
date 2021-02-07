import styled from "@emotion/styled";
import {css} from "@emotion/react";

const Btn=styled.button`
  ${props=>props.img && css`
    background:url(${props.img});
    background-size: contain;
    background-repeat: no-repeat;
  `};
  border:none;
  width:100%;
  height:60px;
  &:focus{
    outline:none;
  }
`

const Button=({img, onButton}: any)=>{
    return(
        <Btn img={img} onClick={onButton} />
    )
}
export default Button;
