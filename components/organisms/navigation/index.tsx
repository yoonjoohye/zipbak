import styled from "@emotion/styled";
import {useRouter} from "next/router";
import HomeIcon from '../../../public/assets/images/icn-home.svg';
import AlarmIcon from '../../../public/assets/images/icn-alarm.svg';
import ProfileIcon from '../../../public/assets/images/icn-profile.svg';

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
`
const Li=styled.li`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size:14px;
  font-weight:600;
`
const Img=styled.img`
  width:1.5em;
  height:1.5em;
  margin-bottom:5px;
`

const Navigation=()=>{
    const router=useRouter();
    return(
        <Footer>
            <Li onClick={()=>router.push('/')}>
                <Img src={HomeIcon}/>
                홈
            </Li>
            <Li onClick={()=>window.alert('곧 만들 예정')}>
                <Img src={AlarmIcon}/>
                알림
            </Li>
            <Li onClick={()=>router.push('/auth/login')}>
                <Img src={ProfileIcon}/>
                로그인
            </Li>
        </Footer>
    )
}
export default Navigation;
