import styled from 'styled-components/native';
interface TextContainerProps {
  color?: string;
  fontSize: string;
}
export const TextContainer = styled.Text<TextContainerProps>`
  ${(props) => (props.color ? `color: ${props.color}` : 'black')};
  font-size: ${(props) => props.fontSize};
`;
