import { SortType } from '../../components/Sort/Sort.props';
import { ProductModel } from '../../interfaces/product.interface';

export type SortAction = { type: SortType.price } | { type: SortType.rating };

export interface SortReducerState {
    sort: SortType;
    products: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortAction): SortReducerState => {
    switch (action.type) {
        case SortType.rating:
            return {
                sort: SortType.rating,
                products: state.products.sort((a, b) => a.initialRating - b.initialRating)
            };
        case SortType.price:
            return {
                sort: SortType.price,
                products: state.products.sort((a, b) => a.price - b.price)
            };
        default:
            return state;
    }
}