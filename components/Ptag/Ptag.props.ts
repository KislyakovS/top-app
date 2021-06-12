import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type DefaultButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

interface PtagProps extends DefaultButtonProps {
    size?: 'big' | 'medium' | 'small';
    children: ReactNode;
}

export default PtagProps;