import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export enum SortType {
    rating,
    price,
}

export interface SortProps extends DefaultElement {
    sort: SortType;
    setSort: (sort: SortType) => void;
}