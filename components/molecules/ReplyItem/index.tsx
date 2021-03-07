import Icon from "../../atoms/Icon";
import {css} from "@emotion/react";
import Label from "../../atoms/Label";
// @ts-ignore
import MoreVertiIcon from "../../../public/assets/images/icn-more-verti.svg";
import React from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import {getFormattedText} from "../../../utils/getFormattedText";

const Wrapper = styled.article`
  padding: 15px 10px;
  display: flex;
  align-items: flex-start;
`;
const Reply = styled.p`
  margin-top: 10px;
  line-height: 1.5;
  word-break: break-word;
`
const Bold = styled.strong`
  font-weight: 500;
`
const Date = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`
const Margin = styled.div`
  margin-left: 10px;
  width: 100%;
`
const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

interface IProps {
    userId: string | any;
    item: { [key: string]: any };
    idx: number;
    moreReply: () => void;
}

const ReplyItem = ({userId, item, idx, moreReply}: IProps) => {
    return (
        <Wrapper>
                <Icon src={`https://cdn.zipbak.site/${item?.user?.profile}`}/>
                <Margin>
                    <Profile>
                        <div>
                            <Bold>{item?.user?.nickname}</Bold>{' '}
                            {item?.userId === userId && <Label type="outline" label="작성자"/>}
                        </div>
                        <Icon src={MoreVertiIcon} click={moreReply} type="small"/>
                    </Profile>
                    <Date>{dayjs(item?.createdAt).format('YYYY/MM/DD')}</Date>
                    <Reply dangerouslySetInnerHTML={{__html: getFormattedText(item?.content)}}/>
                </Margin>
        </Wrapper>
    )
}
export default ReplyItem;
