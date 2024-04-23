import { FC } from 'react';
import { H3Type } from './contracts';
import { H3Styled } from './style';

const H3: FC<H3Type> = ({ title, color, size }) => (
  <H3Styled color={color} size={size}>
    {title}
  </H3Styled>
);

export default H3;
