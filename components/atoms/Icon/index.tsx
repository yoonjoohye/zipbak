import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Img=styled.img`
  ${(props:{type:string})=>props.type==="small" && css`
      width:0.8em;
      height:0.8em;
  `}
  
  ${(props:{type:string})=>props.type==="base" && css`
      width:1em;
      height:1em;
  `}
  ${(props:{type:string})=>props.type==="large" && css`
      width:2em;
      height:2em;
  `}
  display: inline-block;
  vertical-align: middle;
`

interface IProps{
    src: string;
    type:'small' | 'base' | 'large';
    click?: ()=>void;
}
const Icon=({src, type='base', click}:IProps)=>{
    return(
        <Img src={src} type={type} onClick={click}/>
    )
}
export default Icon;
