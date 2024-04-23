import { ReactNode } from 'react';

export interface H3Props {
  size?: string;
  color?: string;
}

export type H3Type = {
  title: string | ReactNode;
  color?: string;
  size?: string;
};
