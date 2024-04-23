import styled from 'styled-components';
import { ButtonProps } from './contacts';

export const ButtonStyled = styled.button<ButtonProps>`
  font-size: ${(props) => (props.size ? props.size + 'px' : '20px')};
  color: ${(props) => (props.color ? props.color : '#222')};
  font-weight: bolder;
`;
