import { FC } from 'react';
import { H1Type } from './contracts';

import { H1Styled } from './style';

const H1: FC<H1Type> = ({ title, color, size }) => (
  <H1Styled color={color} size={size}>
    {title}
  </H1Styled>
);

export default H1;
