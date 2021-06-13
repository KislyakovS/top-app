import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultElement = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

interface RatingProps extends DefaultElement {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}

export default RatingProps;