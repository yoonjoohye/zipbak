import {css} from "@emotion/react";

interface IProps{
    [key:string]:number;
}
const SIZE:IProps={
    lg: 1920,
    md: 1024,
    sm: 480,
}

const media = Object.keys(SIZE).reduce((acc:any, label:string) => {
    acc[label] = (...args:any) => css`
    @media (max-width: ${SIZE[label]}px) {
      ${css(...args)};
    }
  `;
    return acc;
}, {});

export {media};
