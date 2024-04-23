import { FC } from 'react';

import { ButtonType } from './contacts';
import { ButtonStyled } from './style';

const Button: FC<ButtonType> = ({ title, color, size }) => (
  <ButtonStyled color={color} size={size}>
    {title}
  </ButtonStyled>
);

export default Button;
