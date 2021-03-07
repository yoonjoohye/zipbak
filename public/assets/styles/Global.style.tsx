import {Global, css} from '@emotion/react'

const GlobalStyle = () => (
    <Global styles={css`
      //@font-face {
      //  font-family: 'Spoqa Han Sans';
      //  font-weight: 700;
      //  src: local('Spoqa Han Sans Bold'),
      //  url('../fonts/SpoqaHanSans/SpoqaHanSansBold.woff2') format('woff2'),
      //  url('../fonts/SpoqaHanSans/SpoqaHanSansBold.woff') format('woff'),
      //  url('../fonts/SpoqaHanSans/SpoqaHanSansBold.ttf') format('truetype');
      //}
      //
      //@font-face {
      //  font-family: 'Spoqa Han Sans';
      //  font-weight: 400;
      //  src: local('Spoqa Han Sans Regular'),
      //  url('../fonts/SpoqaHanSans/SpoqaHanSansRegular.woff2') format('woff2'),
      //  url('../fonts/SpoqaHanSans/SpoqaHanSansRegular.woff') format('woff'),
      //  url('../fonts/SpoqaHanSans/SpoqaHanSansRegular.ttf') format('truetype');
      //}
      //
      //@font-face {
      //  font-family: 'Spoqa Han Sans';
      //  font-weight: 300;
      //  src: local('Spoqa Han Sans Light'),
      //  url('../fonts/SpoqaHanSans/SpoqaHanSansLight.woff2') format('woff2'),
      //  url('../fonts/SpoqaHanSans/SpoqaHanSansLight.woff') format('woff'),
      //  url('../fonts/SpoqaHanSans/SpoqaHanSansLight.ttf') format('truetype');
      //}
      //
      //@font-face {
      //  font-family: 'Spoqa Han Sans';
      //  font-weight: 100;
      //  src: local('Spoqa Han Sans Thin'),
      //  url('../fonts/SpoqaHanSans/SpoqaHanSansThin.woff2') format('woff2'),
      //  url('../fonts/SpoqaHanSans/SpoqaHanSansThin.woff') format('woff'),
      //  url('../fonts/SpoqaHanSans/SpoqaHanSansThin.ttf') format('truetype');
      //}

      * {
        margin: 0;
        padding: 0;
        font-family: 'Spoqa Han Sans', 'Nanum Barun Gothic', 'sans-serif';
        font-weight: 400;
      }

      html, body {
        width: 100vw;
        height: 100vh;
        font-size: 14px;
      }

      ol, ul, li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }

      img {
        display: block;
      }

      textarea, input, button, select {
        border: none;
        background: none;
        resize: none;
        font-size:14px;

        &:focus {
          outline: none;
        }
      }
    `}/>
)
export default GlobalStyle;
