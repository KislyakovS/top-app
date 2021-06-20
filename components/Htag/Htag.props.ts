import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type DefaultElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
interface HtagProps extends DefaultElement {
    tag: 'h1' | 'h2' | 'h3',
    children: ReactNode
}

export default HtagProps;