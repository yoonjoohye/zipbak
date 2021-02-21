import React from 'react';
import styled from "@emotion/styled";
import Button from "../../../components/atoms/Button";

const Wrapper=styled.main`
  min-height: 100vh;
`
const Box=styled.div`
  padding:10%;
`
const Brand=styled.div`
  font-size:30px;
  font-weight: 500;
  margin-bottom:10px;
`
const Content=styled.p`
  margin-bottom:50px;
  word-break: keep-all;
`
const ButtonWrapper=styled.div`
`

const Login = () => {
    const onLogin = () => {
        window?.Kakao?.Auth?.authorize({
            redirectUri: 'http://localhost:3000/oauth'
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
                {/*<div>*/}
                {/*    <strong>*/}
                {/*        개발자 소개*/}
                {/*    </strong>*/}
                {/*    <p>*/}
                {/*        안녕하세요!<br/>*/}
                {/*        저희는 419호에 살고있는 개발자입니다!<br/>*/}
                {/*        좋은 이웃관계를 만들고 싶어서 만들었어용!<br/>*/}
                {/*        많은 이용 부탁드려요!*/}
                {/*    </p>*/}
                {/*</div>*/}
                <ButtonWrapper>
                    <Button type="kakao" onButton={onLogin}/>
                </ButtonWrapper>
            </Box>
        </Wrapper>
    )
}
export default Login;
