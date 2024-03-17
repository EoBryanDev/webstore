import styled from 'styled-components/native';

import { theme } from '../../themes/theme';
import { Icon } from '../Icon';

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${theme.colors.neutralTheme.black};
  height: inherit;
  width: 100%;

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding-top: 3px;
`;

export const InterContainer = styled.View`
  background-color: ${theme.colors.neutralTheme.white};
`;
export const IconCloseModal = styled(Icon)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 10;
`;
