import { ReactNode } from 'react';

export interface H1Props {
  size?: string;
  color?: string;
}

export type H1Type = {
  title: string | ReactNode;
  color?: string;
  size?: string;
};
