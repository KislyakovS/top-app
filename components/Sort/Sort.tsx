import cls from 'clsx';

import SortIcon from './icons/sort.svg';

import { SortProps, SortType } from './Sort.props';
import styles from './Sort.module.css';

const Sort: React.FC<SortProps> = ({ sort, setSort, className, ...props }) => {
    return (
        <div className={cls(styles.sort, className)} {...props}>
            <span className={styles.sortTitle} id="sort">Сортировка</span>
            <button
                id="rating"
                className={cls(styles.sortItem, sort === SortType.rating && styles.active)}
                onClick={() => setSort(SortType.rating)}
                aria-selected={sort === SortType.rating}
                aria-labelledby="sort rating"
            >
                <SortIcon className={styles.sortIcon} /> По рейтингу
            </button>
            <button
                id="price"
                className={cls(styles.sortItem, sort === SortType.price && styles.active)}
                onClick={() => setSort(SortType.price)}
                aria-selected={sort === SortType.price}
                aria-labelledby="sort price"
            >
                <SortIcon className={styles.sortIcon} /> По цене
            </button>
        </div>
    );
};

export default Sort;