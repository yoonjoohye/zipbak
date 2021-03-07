import React from 'react';

const Script=()=>(
    <>
        <script src="https://developers.kakao.com/sdk/js/kakao.js" />
        <script dangerouslySetInnerHTML={{
            __html: `
                Kakao.init('35abc96745d0da8a6c448f57d0c8efbd');
                console.log('INIT KAKAO SDK',Kakao.isInitialized());`,
        }} />
        <script type="text/javascript">
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "5pv3prgb4b");
        </script>
    </>
)
export default Script;
