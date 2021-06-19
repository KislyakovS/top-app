import { ProductModel } from '../../interfaces/product.interface';
import { TopLevalCategory, TopPageModel } from '../../interfaces/topPage.interface';

export interface TopPageProps {
    firstCategory: TopLevalCategory,
    page: TopPageModel,
    products: ProductModel[]
}