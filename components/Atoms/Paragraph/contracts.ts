import { ReactNode } from 'react';

export interface ParagraphProps {
  color?: string;
  fontSize?: string;
}

export type ParagraphType = {
  children: ReactNode;
  color?: string;
  fontSize?: string;
};
