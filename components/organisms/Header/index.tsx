import React from "react";
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import {css} from "@emotion/react";
import Icon from "../../atoms/Icon";
// @ts-ignore
import LeftIcon from "../../../public/assets/images/icn-arrow-left.svg";
// @ts-ignore
import CloseIcon from "../../../public/assets/images/icn-close.svg";
// @ts-ignore
import Logo from "../../../public/assets/images/logo.png";

const Wrapper = styled.header`
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 2;
`
const Box = styled.div`
  height:50px;
  display: flex;
  align-items: center;
  ${(props: { justifyContent?: string }) => props.justifyContent && css`
    justify-content: ${props.justifyContent};
  `}
  padding: 0 1em;
`
const IconWrapper = styled.span`
  margin-right:10px;
`
const Brand = styled.span`
  font-size: 16px;
  font-weight: 500;
`
const Button=styled.button`
  font-size:16px;
`

interface IProps {
    type: 'base' | 'detail' | 'write';
    click?:() => void;
}

const Header = ({type, click}: IProps) => {
    const router = useRouter();

    return (
        <Wrapper>
            {
                type === 'base' &&
                <Box justifyContent="center">
                    <IconWrapper>
                        <Icon src={Logo} type="large"/>
                    </IconWrapper>
                    <Brand>집박구리</Brand>
                </Box>
            }

            {
                type === 'detail' &&
                <Box>
                    <IconWrapper>
                        <Icon src={LeftIcon} click={() => router.back()}/>
                    </IconWrapper>
                </Box>
            }
            {
                type === 'write' &&
                <Box justifyContent="space-between">
                    <Icon src={CloseIcon} click={() => router.back()}/>
                    <Brand>집박구리 글쓰기</Brand>
                    <Button onClick={click}>완료</Button>
                </Box>
            }
        </Wrapper>
    )
}
export default Header;
