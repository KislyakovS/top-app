import { useContext } from 'react';
import cls from 'clsx';

import { AppContext } from '../../context/app.context';
import { TopLevalCategory } from '../../interfaces/topPage.interface';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';

import CoursesIcon from './icons/courses.svg';
import ServisesIcon from './icons/servises.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import styles from './Menu.module.css';

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevalCategory.Courses },
    { route: 'servises', name: 'Сервисы', icon: <ServisesIcon />, id: TopLevalCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevalCategory.Books },
    { route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevalCategory.Products }
];

const Menu: React.FC = () => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <ul className={styles.firstLevel}>
                {firstLevelMenu.map(menu => {
                    return <li key={menu.route} className={styles.firstLevelItem}>
                        <a
                            href={`/${menu.route}`}
                            className={cls(
                                styles.firstLevelLink,
                                menu.id === firstCategory && styles.active
                            )}
                        >
                            <span className={styles.icon}>{menu.icon}</span>
                            {menu.name}
                        </a>
                        {menu.id === firstCategory && buildSecondLevel(menu)}
                    </li>;
                })}
            </ul>
        );
    };

    const buildSecondLevel = (firstMenu: FirstLevelMenuItem) => {
        return (
            <ul className={styles.secondLevel}>
                {menu.map(m => {
                    return (
                        <li key={m._id.secondCategory} className={styles.secondLevelItem}>
                            <span className={styles.secondLevelLink}>{m._id.secondCategory}</span>
                            <div>
                                {buildThirdLevel(m.pages, firstMenu.route)}
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            <ul className={styles.thirdLevel}>
                {pages.map(page => {
                    return (
                        <li key={page._id} className={styles.thirdLevelItem}>
                            <a
                                href={`/${route}/${page.alias}`}
                                className={cls(
                                    styles.thirdLevelLink,
                                    false && styles.active
                                )}
                            >
                                {page.category}
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <nav className={styles.nav}>
            {buildFirstLevel()}
        </nav>
    );
};

export default Menu;