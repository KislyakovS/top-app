import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface ButtonProps extends DefaultButtonProps {
    apperance?: 'primary' | 'ghost'
    arrow?: 'right' | 'down' | 'none';
    children: ReactNode;
}

export default ButtonProps;