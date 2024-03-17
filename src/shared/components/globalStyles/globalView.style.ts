import styled from 'styled-components/native';

interface IDisplayProps {
  customMargin?: string;
}
export const DisplayFlexColumn = styled.View<IDisplayProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin: ${(props) => (props.customMargin ? props.customMargin : '0px')};
`;
