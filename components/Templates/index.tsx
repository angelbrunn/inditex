'use client';
import { FC } from 'react';

import Nav from '@/components/Nav';

import { TemplateType } from './contracts';
import { MainTemplateStyle } from './style';
import styles from '../../app/page.module.css';

const Maintemplate: FC<TemplateType> = ({ children }) => (
  <MainTemplateStyle className={styles.main}>
    <Nav />
    {children}
  </MainTemplateStyle>
);

export default Maintemplate;
