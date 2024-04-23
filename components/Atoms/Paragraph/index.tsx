import { FC } from 'react';
import { ParagraphStyled } from './style';
import { ParagraphType } from './contracts';

export const Paragraph: FC<ParagraphType> = ({ children, color, fontSize }) => (
  <ParagraphStyled color={color} fontSize={fontSize}>
    {children}
  </ParagraphStyled>
);
