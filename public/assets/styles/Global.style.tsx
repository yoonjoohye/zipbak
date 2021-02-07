import { Global, css } from '@emotion/react'

const GlobalStyle=()=>(
    <Global styles={css`
        html,body {
          min-width:100vw;
          min-height:100vh;
          margin:0;
          font-size:14px;
          font-weight:400;
        } 
        ol, ul, li{
          list-style: none;
        }
        a{
          text-decoration: none;
        }
        img{
          display:block;
        }
      `}/>
)
export default GlobalStyle;
