import Icon from "../../atoms/Icon";
import ProfileIcon from "../../../public/assets/images/icn-profile-01.svg";
import MoreHoriIcon from "../../../public/assets/images/icn-more-hori.svg";
import React from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 10px;
`
const BoardWrapper = styled.section`
  padding: 20px 10px;
  border-top: 1px dashed #eee;
  border-bottom: 1px solid #eee;
  min-height: 25vh;
  line-height: 1.5;
`
const Profile = styled.div`
  display: flex;
  align-items: flex-start;
`
const Bold = styled.strong`
  font-weight: 600;
`
const Date=styled.div`
  font-size:12px;
  font-weight: 300;
  margin-top:5px;
`
const Margin = styled.div`
  margin-left: 10px;
`
interface IProps{
    postList:{
        [key:string]:any;
    }
    moreBoard:()=>void;
}
const PostDetail=({postList, moreBoard}:IProps)=>{
    return(
        <>
            <ProfileWrapper>
                <Profile>
                    <Icon src={ProfileIcon} type="large"/>
                    <Margin>
                        <Bold>익명</Bold>
                        <Date>{dayjs(postList?.createdAt).format('YYYY/MM/DD')}</Date>
                    </Margin>
                </Profile>
                <div>
                    <Icon src={MoreHoriIcon} click={moreBoard}/>
                </div>
            </ProfileWrapper>
            <BoardWrapper>
                {postList?.content}
            </BoardWrapper>
            {/*<NavWrapper>*/}
            {/*    <Icon src={MsgIcon}/> 11*/}
            {/*</NavWrapper>*/}
        </>
    )
}
export default PostDetail;
