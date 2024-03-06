import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native';

import { TextContainer } from './text.style';
import { textTypes } from './textTypes';

interface ITextProps extends TextPropsNative {
  color?: string;
  type?: string;
  margin?: string;
}

export const Text = ({ type, color, margin, ...props }: ITextProps) => {
  const handleSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLD:
      case textTypes.TITLE_LIGHT:
      case textTypes.TITLE_REGULAR:
        return '24px';
      case textTypes.SUBTITLE_BOLD:
      case textTypes.SUBTITLE_LIGHT:
      case textTypes.SUBTITLE_REGULAR:
        return '20px';
      case textTypes.BUTTON_BOLD:
      case textTypes.BUTTON_REGULAR:
      case textTypes.BUTTON_LIGHT:
        return '18px';

      case textTypes.SMALLPARAGRAPH_BOLD:
      case textTypes.SMALLPARAGRAPH_LIGHT:
      case textTypes.SMALLPARAGRAPH_REGULAR:
        return '10px';
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_LIGHT:
      case textTypes.PARAGRAPH_REGULAR:
      default:
        return '14px';
    }
  }, [type]);

  const handleFont = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLD:
      case textTypes.SUBTITLE_BOLD:
      case textTypes.SMALLPARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.BUTTON_BOLD:
        return 'Poppins-Bold';
      case textTypes.TITLE_LIGHT:
      case textTypes.SUBTITLE_LIGHT:
      case textTypes.SMALLPARAGRAPH_LIGHT:
      case textTypes.PARAGRAPH_LIGHT:
      case textTypes.BUTTON_LIGHT:
        return 'Poppins-Light';
      case textTypes.TITLE_REGULAR:
      case textTypes.SUBTITLE_REGULAR:
      case textTypes.SMALLPARAGRAPH_REGULAR:
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.BUTTON_REGULAR:
      default:
        return 'Poppins-Regular';
    }
  }, [type]);

  return (
    <TextContainer
      customMargin={margin}
      fontFamily={handleFont}
      fontSize={handleSize}
      color={color}
      {...props}
    />
  );
};
