import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type DefaultElement = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface ButtonProps extends DefaultElement {
    apperance?: 'primary' | 'ghost'
    arrow?: 'right' | 'down' | 'none';
    children: ReactNode;
}

export default ButtonProps;