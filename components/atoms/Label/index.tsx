import styled from "@emotion/styled";
import {css} from "@emotion/react";
import Color from "../../../public/assets/styles/Color.style";

const StyleLabel = styled.span`
  color: #000000;
  border-radius: 3px;
  font-size: 12px;
  padding: 0 8px;
  display: flex;
  height: 20px;
  justify-content: center;
  align-items: center;
  ${(props: { type: string }) =>
          props.type === 'category' && css`
            background-color: #eee;
            color:#666;
          `};
  ${(props: { type: string }) =>
          props.type === 'emotion' && css`
            background-color: #fcf1ca;
          `};
  ${(props: { type: string }) =>
          props.type === 'outline' && css`
            display: inline-flex;
            border: 1px solid ${Color.primary};
            color: ${Color.primary};
          `};

`;

interface IProps {
    label: string
    type?: 'category' | 'emotion' | 'info' | 'outline'
}

const Label = ({label, type = 'category'}: IProps) => {
    return (
        <StyleLabel type={type}>{label}</StyleLabel>
    )
}
export default Label;
