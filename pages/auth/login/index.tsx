import React from 'react';
import styled from "@emotion/styled";
import axios from "axios";
import {useRouter} from "next/router";
import {css} from "@emotion/react";
// @ts-ignore
import KakaoImg from "../../../public/assets/images/btn-kakao.png";

const Wrapper = styled.main`
  min-height: 100vh;
`
const Box = styled.div`
  padding: 10%;
`
const Brand = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
`
const Content = styled.p`
  margin-bottom: 50px;
  word-break: keep-all;
`

interface IProps {
    styleType: any;
}

const Button = styled.button<IProps>`
  ${(props: IProps) => props.styleType === 'kakao' && css`
    background: url(${KakaoImg});
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 60px;
  `};

  &:focus {
    outline: none;
  }
`
const Login = () => {
    const router = useRouter();

    const onLogin = async () => {
        // @ts-ignore
        window?.Kakao?.Auth?.login({
            success: async (response: any) => {
                console.log(response);
                try {
                    const res = await axios.post('/auth/kakao', {
                        token: response.access_token,
                        provider: 'kakao'
                    }, {withCredentials: true});
                    console.log(res);
                    if (res.status === 200) {
                        if (document.referrer && document.referrer.includes('localhost' || 'zipbak.site')) {
                            await router.back();
                        } else {
                            await router.push('/');
                        }
                    }
                } catch (e) {
                    console.error(e);
                }
            },
            fail: (error: any) => {
                console.log(error);
            },
        });
    }

    return (
        <Wrapper>
            <Box>
                <Brand>집박구리</Brand>
                <Content>
                    휴엔하임 커뮤니티 활성화를 위해 만들어졌어요!<br/>
                    우리 함께 좋은 이웃관계를 만들어봐요!
                </Content>
                <div>
                    <Button styleType="kakao" onClick={onLogin}/>
                </div>
            </Box>
        </Wrapper>
    )
}
export default Login;
