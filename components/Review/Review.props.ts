import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ReviewModel } from '../../interfaces/product.interface';

type DefaultElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface ReviewProps extends DefaultElement {
    review: ReviewModel;
}