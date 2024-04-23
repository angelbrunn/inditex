import { ReactNode } from 'react';

export interface H2Props {
  size?: string;
  color?: string;
}

export type H2Type = {
  title: string | ReactNode;
  color?: string;
  size?: string;
};
