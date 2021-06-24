import { useState } from 'react';
import cls from 'clsx';
import Image from 'next/image';

import { Button, Card, Chip, Rating, Separator, Review, ReviewForm } from '..';
import { getPriceRu, devOfNum } from '../../helpers/helpers';

import { ProductProps } from './Product.props';
import styles from './Product.module.css';

const Product: React.FC<ProductProps> = ({ product, className, ...props }) => {
    const [isReviewOpenend, setIsReviewOpenend] = useState(false);

    return <>
        <Card className={styles.product}>
            <div className={styles.logo}><Image width={70} height={70} src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {getPriceRu(product.price)}
                {product.oldPrice && <Chip className={styles.discount} color='green'>{getPriceRu(product.price - product.oldPrice)}</Chip>}
            </div>
            <div className={styles.credit}>{getPriceRu(product.credit)}<span className={styles.creditSuffix}>/мес</span></div>
            <div className={styles.rating}><Rating rating={product.initialRating} /></div>
            <div className={styles.tags}>{product.categories.map(c => <Chip key={c} color='ghost'>{c}</Chip>)}</div>
            <div className={styles.priceLabel}>цена</div>
            <div className={styles.creditLabel}>кредит</div>
            <div className={styles.ratingLabel}>{product.reviewCount} {devOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
            <Separator className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
                {product.characteristics.map((c) => (
                    <div className={styles.characteristic}>
                        <span className={styles.characteristicName}>{c.name}</span>
                        <span className={styles.characteristicDots}></span>
                        <span className={styles.characteristicValue}>{c.value}</span>
                    </div>
                ))}
                <Chip className={styles.chipJob} color="ghost">Гарантия трудоустройства</Chip>
            </div>
            <div className={styles.advBlock}>
                {product.advantages && <div className={styles.advantages}>
                    <div className={styles.advTitle}>Преимущества</div>
                    <p>{product.advantages}</p>
                </div>}
                {product.disadvantages && <div className={styles.disadvantages}>
                    <div className={styles.advTitle}>Недостатки</div>
                    <p>{product.disadvantages}</p>
                </div>}
            </div>
            <Separator className={cls(styles.hr, styles.hrSecondary)} />
            <div className={styles.actions}>
                <Button>Узнать подробнее</Button>
                <Button className={styles.reviewButton} arrow={isReviewOpenend ? 'down' : 'right'} apperance='ghost' onClick={() => setIsReviewOpenend(!isReviewOpenend)}>Читать отзывы</Button>
            </div>
        </Card>
        <Card color="grey" className={cls(styles.reviews, isReviewOpenend ? styles.opened : styles.closed)}>
            {product.reviews.map(r => <Review key={r._id} review={r} className={styles.review} />)}
            <Separator className={cls(styles.hr, styles.hrSecondary)} />
            <ReviewForm productId={product._id} />
        </Card>
    </>;
};

export default Product;