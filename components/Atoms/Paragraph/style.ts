import styled from 'styled-components';
import { ParagraphProps } from './contracts';

export const ParagraphStyled = styled.p<ParagraphProps>`
  color: ${(props) => (props.color ? props.color : '#222')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
`;
