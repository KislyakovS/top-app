import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type DefaultButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface ChipProps extends DefaultButtonProps {
    size?: 'big' | 'medium';
    color?: 'ghost' | 'red' | 'green' | 'grey' | 'primary'
    href?: string;
    children: ReactNode;
}

export default ChipProps;