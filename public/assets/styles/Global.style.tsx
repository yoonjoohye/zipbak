import { Global, css } from '@emotion/react'

const GlobalStyle=()=>(
    <Global styles={css` 
        *{
          margin:0;
          padding:0;
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          font-weight:400;
        }
        html, body{
          width:100vw;
          height:100vh;
          font-size:14px;
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
        textarea, input, button, select{
          border:none;
          background:none;
          resize: none;

          &:focus{
            outline:none;
          }
        }
      `}/>
)
export default GlobalStyle;
