import styled from 'styled-components/native';
interface TextContainerProps {
  color?: string;
  fontSize: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Regular' | 'Poppins-Light';
}
export const TextContainer = styled.Text<TextContainerProps>`
  ${(props) => (props.color ? `color: ${props.color}` : 'black')};
  padding-top: 3px;
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
`;
