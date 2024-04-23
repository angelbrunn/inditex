import { FC } from 'react';
import { H2Type } from './contracts';

import { H2Styled } from './style';

const H2: FC<H2Type> = ({ title, color, size }) => (
  <H2Styled color={color} size={size}>
    {title}
  </H2Styled>
);

export default H2;
