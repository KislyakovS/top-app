import cls from 'clsx';

import { ProductProps } from './Product.props';

const Product: React.FC<ProductProps> = ({ product, className, ...props }) => {
    return <div className={cls(className)} {...props}>{product.title}</div>;
};

export default Product;