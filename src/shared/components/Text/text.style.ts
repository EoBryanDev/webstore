import styled from 'styled-components/native';
interface TextContainerProps {
  color?: string;
  customMargin?: string;
  fontSize: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Regular' | 'Poppins-Light';
}
export const TextContainer = styled.Text<TextContainerProps>`
  ${(props) => (props.color ? `color: ${props.color};` : '')};
  ${(props) => (props.customMargin ? `margin: ${props.customMargin};` : '')};
  padding-top: 3px;
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
`;
