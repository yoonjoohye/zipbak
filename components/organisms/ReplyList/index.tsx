import React from "react";
import ReplyItem from "../../molecules/ReplyItem";


interface IProps{
    replyList:{
        count:number;
        list:[];
    }
    moreReply:()=>void;
}
const ReplyList=({replyList, moreReply}:IProps)=>{
    return(
        <>
            {
                replyList?.count > 0 ? replyList?.list.map((item:[], idx: number) => (
                    <ReplyItem key={idx} item={item} idx={idx} moreReply={moreReply}/>
                )):
                    <div>
                        <div>🥺</div>
                        <p>아직 댓글이 없어요!</p>
                        <p>가장 첫 댓글을 달아주세요.</p>
                    </div>
            }
        </>
    )
}
export default ReplyList;
