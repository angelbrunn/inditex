import styled from 'styled-components';

import { H1Props } from './contracts';

export const H1Styled = styled.h1<H1Props>`
  font-size: ${(props) => (props.size ? props.size + 'px' : '25px')};
  color: ${(props) => (props.color ? props.color : '#3675a7')};
  font-weight: bolder;
`;
