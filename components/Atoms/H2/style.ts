import styled from 'styled-components';
import { H2Props } from './contracts';

export const H2Styled = styled.h2<H2Props>`
  font-size: ${(props) => (props.size ? props.size + 'px' : '20px')};
  color: ${(props) => (props.color ? props.color : '#222')};
  font-weight: bolder;
`;
