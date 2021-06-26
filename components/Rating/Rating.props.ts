import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

type DefaultElement = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

interface RatingProps extends DefaultElement {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
    error?: FieldError;
}

export default RatingProps;