import React from "react";
import styled from "@emotion/styled";
import Icon from "../../atoms/Icon";
// @ts-ignore
import MoreHoriIcon from '../../../public/assets/images/icn-more-hori.svg';
import dayjs from "dayjs";
import {getFormattedText} from "../../../utils/getFormattedText";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 10px;
`
const BoardWrapper = styled.p`
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
  font-weight: 500;
`
const Date=styled.div`
  font-size:12px;
  color:#666;
  margin-top:5px;
`
const Margin = styled.div`
  margin-left: 10px;
`
interface IProps{
    postList:{
        [key:string]:any;
    } | null;
    moreBoard:()=>void;
}
const PostDetail=({postList, moreBoard}:IProps)=>{
    return(
        <>
            <ProfileWrapper>
                <Profile>
                    <Icon src={`https://cdn.zipbak.site/${postList?.user?.profile}`} type="large"/>
                    <Margin>
                        <Bold>{postList?.user?.nickname}</Bold>
                        <Date>{dayjs(postList?.createdAt).format('YYYY/MM/DD')}</Date>
                    </Margin>
                </Profile>
                <Icon src={MoreHoriIcon} click={moreBoard} type="small"/>
            </ProfileWrapper>
            <BoardWrapper dangerouslySetInnerHTML={{__html:getFormattedText(postList?.content)}}/>
        </>
    )
}
export default PostDetail;
