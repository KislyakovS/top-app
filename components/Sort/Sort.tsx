import cls from 'clsx';

import SortIcon from './icons/sort.svg';

import { SortProps, SortType } from './Sort.props';
import styles from './Sort.module.css';

const Sort: React.FC<SortProps> = ({ sort, setSort, className, ...props }) => {
    return (
        <div className={cls(styles.sort, className)} {...props}>
            <button className={cls(styles.sortItem, sort === SortType.rating && styles.active)} onClick={() => setSort(SortType.rating)}>
                <SortIcon className={styles.sortIcon} /> По рейтингу
            </button>
            <button className={cls(styles.sortItem, sort === SortType.price && styles.active)} onClick={() => setSort(SortType.price)}>
                <SortIcon className={styles.sortIcon} /> По цене
            </button>
        </div>
    );
};

export default Sort;