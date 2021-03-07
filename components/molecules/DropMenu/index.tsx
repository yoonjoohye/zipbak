const DropMenu=()=>{
    return(
        <>
            <div onClick={()=>console.log('삭제')}>
                삭제하기
            </div>
            <div onClick={()=>console.log('수정')}>
                수정하기
            </div>
        </>
    )
}
export default DropMenu;
