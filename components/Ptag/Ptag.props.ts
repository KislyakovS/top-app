import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type DefaultElement = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

interface PtagProps extends DefaultElement {
    size?: 'big' | 'medium' | 'small';
    children: ReactNode;
}

export default PtagProps;