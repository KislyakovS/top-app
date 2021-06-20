import cls from 'clsx';

import { Htag, Chip, Card } from '../../components';
import RateIcon from './icons/rate.svg';

import { TopPageProps } from './TopPage.props';
import styles from './TopPage.module.css';
import React from 'react';
import { TopLevalCategory } from '../../interfaces/topPage.interface';

const TopPage: React.FC<TopPageProps> = ({ firstCategory, page, products }) => {
    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <Htag tag="h1">{page.title}</Htag>
            {products && <Chip color="grey" size="medium">{products.length.toString()}</Chip>}
            <span>Сортировка</span>
        </div>
        <div>
            {products && products.map(product => <div key={product._id}>{product.title}</div>)}
        </div>
        {firstCategory == TopLevalCategory.Courses && (
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
                            <span className={styles.cardLegend}>{page.hh.juniorSalary}</span>
                            <div className={styles.cardSalaryRate}>
                                <RateIcon className={styles.rateFill} />
                                <RateIcon />
                                <RateIcon />
                            </div>
                        </div>
                        <div>
                            <p className={styles.cardTitle}>Средний</p>
                            <span className={styles.cardLegend}>{page.hh.middleSalary}</span>
                            <div className={styles.cardSalaryRate}>
                                <RateIcon className={styles.rateFill} />
                                <RateIcon className={styles.rateFill} />
                                <RateIcon />
                            </div>
                        </div>
                        <div>
                            <p className={styles.cardTitle}>Профессионал</p>
                            <span className={styles.cardLegend}>{page.hh.seniorSalary}</span>
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
    </div>;
};

export default TopPage;