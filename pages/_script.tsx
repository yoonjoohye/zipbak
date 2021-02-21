import React from 'react';

const Script=()=>(
    <>
        <script src="https://developers.kakao.com/sdk/js/kakao.js" />
        <script dangerouslySetInnerHTML={{
            __html: `
                Kakao.init('35abc96745d0da8a6c448f57d0c8efbd');
                console.log('INIT KAKAO SDK',Kakao.isInitialized());`,
        }} />
        <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css' />
    </>
)
export default Script;
