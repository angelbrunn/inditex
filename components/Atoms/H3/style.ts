import styled from 'styled-components';
import { H3Props } from './contracts';

export const H3Styled = styled.h3<H3Props>`
  font-size: ${(props) => (props.size ? props.size + 'px' : '16px')};
  color: ${(props) => (props.color ? props.color : '#222')};
  font-weight: bolder;
`;
