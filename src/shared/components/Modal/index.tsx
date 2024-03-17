import { Alert, Modal as ModalReact, ModalProps as ModalPropsReact } from 'react-native';

import { theme } from '../../themes/theme';
import Button from '../Button';
import { Text } from '../Text';
import { textTypes } from '../Text/textTypes';
import { ContainerModal, IconCloseModal, InterContainer } from './modal.style';

interface IModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: IModalProps) => {
  return (
    <ModalReact
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        Alert.alert('');
        onCloseModal();
      }}
      {...props}
    >
      <ContainerModal>
        <InterContainer>
          <Text
            type={textTypes.PARAGRAPH_BOLD}
            color={theme.colors.mainTheme.primary}
            margin="16px"
          >
            {title}
          </Text>
          <Text type={textTypes.PARAGRAPH_REGULAR} color={theme.colors.mainTheme.primary}>
            {text}
          </Text>
          <IconCloseModal onPress={onCloseModal} name="cross" color="#000" />
          <Button title="OK" onPress={onCloseModal} />
        </InterContainer>
      </ContainerModal>
    </ModalReact>
  );
};
export default Modal;
