import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface ReviewFormProps extends DefaultElement {
    productId: string;
}