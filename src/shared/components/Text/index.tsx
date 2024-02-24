import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native';

import { TextContainer } from './text.style';
import { textTypes } from './textTypes';

interface ITextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

export const Text = ({ type, color, ...props }: ITextProps) => {
  const handleSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE:
        return '32px';
      default:
        return '16px';
    }
  }, [type]);
  return <TextContainer fontSize={handleSize} color={color} {...props} />;
};
