import Icon from "../../atoms/Icon";
import ProfileIcon from "../../../public/assets/images/icn-profile-01.svg";
import {css} from "@emotion/react";
import Label from "../../atoms/Label";
import MoreVertiIcon from "../../../public/assets/images/icn-more-verti.svg";
import React from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";

const Wrapper = styled.article`
  padding: 15px 10px;
`;
const Profile = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Reply = styled.pre`
  margin-top: 10px;
  line-height: 1.5;
  word-break: break-word;
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
  width: 100%;
`
interface IProps{
    item:[];
    idx:number;
    moreReply:()=>void;
}

const ReplyItem=({item, idx, moreReply}:IProps)=>{
    return(
        <Wrapper>
            <Profile>
                <Icon src={ProfileIcon}/>
                <Margin>
                    <div css={css`display:flex; justify-content: space-between; align-items: center;`}>
                        <div>
                            <Bold>익명</Bold>{' '}
                            <Label type="outline" label="작성자"/>
                        </div>
                        <Icon src={MoreVertiIcon} click={moreReply}/>

                    </div>
                    <Date>{dayjs(item?.createdAt).format('YYYY/MM/DD')}</Date>
                    <Reply>
                        {item.content}
                    </Reply>
                </Margin>
            </Profile>
        </Wrapper>
    )
}
export default ReplyItem;
