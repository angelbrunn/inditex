import { ReactNode } from 'react';

export interface ButtonProps {
  size?: string;
  color?: string;
}

export type ButtonType = {
  title: string | ReactNode;
  color?: string;
  size?: string;
};
