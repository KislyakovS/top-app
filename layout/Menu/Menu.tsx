import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cls from 'clsx';

import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from '../../helpers/firstLevelMenu';

import styles from './Menu.module.css';

const Menu: React.FC = () => {
    const router = useRouter();
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const openSecondLevelMenu = (category: string) => {
        if (!setMenu) return null;

        setMenu(menu.map(m => m._id.secondCategory === category ? ({ ...m, isOpened: !m.isOpened }) : m));
    };

    const buildFirstLevel = () => {
        return (
            <ul className={styles.firstLevel}>
                {firstLevelMenu.map(menu => {
                    return (
                        <li key={menu.route} className={styles.firstLevelItem}>
                            <Link href={`/${menu.route}`}>
                                <a className={cls(
                                    styles.firstLevelLink,
                                    menu.id === firstCategory && styles.active
                                )}
                                >
                                    <span className={styles.icon}>{menu.icon}</span>
                                    {menu.name}
                                </a>
                            </Link>
                            {menu.id === firstCategory && buildSecondLevel(menu)}
                        </li>
                    );
                })}
            </ul>
        );
    };

    const buildSecondLevel = (firstMenu: FirstLevelMenuItem) => {
        return (
            <ul className={styles.secondLevel}>
                {menu.map(m => {
                    const category = m._id.secondCategory;

                    if (m.pages.some(p => p.alias === router.query.alias)) {
                        m.isOpened = true;
                    }

                    return (
                        <li key={category} className={styles.secondLevelItem}>
                            <span className={styles.secondLevelLink} onClick={() => openSecondLevelMenu(category)}>{category}</span>
                            <div className={cls(styles.secondLevelSubmenu, m.isOpened && styles.opened)}>
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
                    const isActive = router.query.alias === page.alias;

                    return (
                        <li key={page._id} className={styles.thirdLevelItem}>
                            <Link href={`/${route}/${page.alias}`}>
                                <a className={cls(
                                    styles.thirdLevelLink,
                                    isActive && styles.active
                                )}
                                >
                                    {page.category}
                                </a>
                            </Link>
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