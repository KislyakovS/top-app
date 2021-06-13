import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type DefaultElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface ChipProps extends DefaultElement {
    size?: 'big' | 'medium';
    color?: 'ghost' | 'red' | 'green' | 'grey' | 'primary'
    href?: string;
    children: ReactNode;
}

export default ChipProps;