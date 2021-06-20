import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type DefaultElement = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export interface CardProps extends DefaultElement {
    color?: 'white' | 'grey';
    sizePadding?: 'medium' | 'big';
    children: ReactNode
}