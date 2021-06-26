import { useEffect, useReducer, } from 'react';
import cls from 'clsx';

import { TopLevalCategory } from '../../interfaces/topPage.interface';
import { Htag, Chip, Card, Sort, Product } from '../../components';
import RateIcon from './icons/rate.svg';
import ChackIcon from './icons/chack.svg';

import { SortType } from '../../components/Sort/Sort.props';
import { getPriceRu } from '../../helpers/helpers';
import { TopPageProps } from './TopPage.props';
import { sortReducer } from './sort.reducer';
import styles from './TopPage.module.css';


const TopPage: React.FC<TopPageProps> = ({ firstCategory, page, products }) => {
    const [{ sort, products: sortedProduct }, dispatchSort] = useReducer(sortReducer, { sort: SortType.rating, products });

    const setSort = (type: SortType) => dispatchSort({ type });

    useEffect(() => {
        dispatchSort({ type: 'update', payload: products });
    }, [products]);


    return (<div>
        <div className={styles.header}>
            <Htag tag="h1">{page.title}</Htag>
            {products && <Chip color="grey" size="medium">{products.length.toString()}</Chip>}
            <Sort sort={sort} setSort={setSort} />
        </div>
        <div>
            {sortedProduct && sortedProduct.map(product => <Product key={product._id} product={product} />)}
        </div>
        {firstCategory == TopLevalCategory.Courses && page.hh && (
            <div className={styles.work}>
                <div className={styles.workTitle}>
                    <Htag tag="h2">Вакансии - {page.category}</Htag>
                    <Chip color="red" size="medium">hh.ru</Chip>
                </div>
                <div className={styles.workStatistics}>
                    <Card className={styles.cardCount}>
                        <p className={styles.cardTitle}>Всего вакансий</p>
                        <span className={cls(styles.cardLegend, styles.cardLegendPrimary)}>{page.hh.count}</span>
                    </Card>
                    <Card className={styles.cardSalary}>
                        <div>
                            <p className={styles.cardTitle}>Начальный</p>
                            <span className={styles.cardLegend}>{getPriceRu(page.hh.juniorSalary)}</span>
                            <div className={styles.cardSalaryRate}>
                                <RateIcon className={styles.rateFill} />
                                <RateIcon />
                                <RateIcon />
                            </div>
                        </div>
                        <div>
                            <p className={styles.cardTitle}>Средний</p>
                            <span className={styles.cardLegend}>{getPriceRu(page.hh.middleSalary)}</span>
                            <div className={styles.cardSalaryRate}>
                                <RateIcon className={styles.rateFill} />
                                <RateIcon className={styles.rateFill} />
                                <RateIcon />
                            </div>
                        </div>
                        <div>
                            <p className={styles.cardTitle}>Профессионал</p>
                            <span className={styles.cardLegend}>{getPriceRu(page.hh.seniorSalary)}</span>
                            <div className={styles.cardSalaryRate}>
                                <RateIcon className={styles.rateFill} />
                                <RateIcon className={styles.rateFill} />
                                <RateIcon className={styles.rateFill} />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        )}
        {page.advantages && page.advantages.length > 0 && (
            <div>
                <Htag className={styles.advantagesTitle} tag="h2">Преимущества</Htag>
                <div className={styles.wrapperAdvantage}>
                    {page.advantages.map(a =>
                        <div key={a._id} className={styles.advantage}>
                            <ChackIcon />
                            <Htag tag="h3">{a.title}</Htag>
                            <hr />
                            {a.description && <p className={styles.advantageDescription}>{a.description}</p>}
                        </div>
                    )}
                </div>
            </div>
        )}
        {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
        {page.tags && (
            <div className={styles.skills}>
                <Htag className={styles.skillsTitle} tag="h2">Получаемые навыки</Htag>
                <ul className={styles.skillsList}>
                    {page.tags.map(t => <li key={t}><Chip color="primary">{t}</Chip></li>)}
                </ul>
            </div>
        )}
    </div>);
};

export default TopPage;