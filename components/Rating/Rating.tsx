import { useState, KeyboardEvent, forwardRef, useRef } from 'react';
import cls from 'clsx';

import StarIcon from './star.svg';

import RatingProps from './Rating.props';
import styles from './Rating.module.css';

const BASE_COUNT_RATINGS = 5;

const RADING_LIST = new Array(BASE_COUNT_RATINGS).fill(1);

const Rating = forwardRef<HTMLUListElement, RatingProps>(({ className, error, isEditable = false, rating, setRating, ...props }) => {
    const [currentRating, setCurrentRating] = useState(rating);
    const itemsRating = useRef<(HTMLElement | null)[]>([]);

    const onClickItemStar = (rating: number) => {
        if (setRating && isEditable) {
            setRating(rating);
        }
    };

    const onHoverItemStar = (rating: number) => {
        if (isEditable) {
            setCurrentRating(rating);
        }
    };

    const onLeaveItemStar = () => {
        if (isEditable) {
            setCurrentRating(rating);
        }
    };

    const onKeyDownItemStar = (e: KeyboardEvent<HTMLElement>, rating: number) => {
        if (!setRating || !isEditable) return;

        let calcRating = rating;

        if (e.code === 'ArrowLeft') {
            itemsRating.current[rating - 1]?.focus();
        }

        if (e.code === 'ArrowRight') {
            itemsRating.current[rating + 1]?.focus();
            calcRating += 1;
        }

        setRating(calcRating);
        setCurrentRating(calcRating);
    };

    return (
        <div className={cls(styles.wrapper, className)}>
            <ul className={cls(styles.rating, error && styles.error)} {...props}>
                {RADING_LIST.map((_, i) => {
                    return (
                        <li className={cls(styles.item, isEditable && styles.item_editable)} key={i}
                            onMouseEnter={() => onHoverItemStar(i + 1)}
                            onMouseLeave={onLeaveItemStar}
                            onClick={() => onClickItemStar(i + 1)}
                            tabIndex={isEditable ? 0 : -1}
                            onKeyDown={(e) => onKeyDownItemStar(e, i)}
                            ref={(r) => itemsRating.current[i] = r}
                            role={isEditable ? 'slider' : ''}
                            aria-label={isEditable ? 'укажите рейтинг стрелками влево или вправо' : `рейтинг ${rating}`}
                            aria-valuemin={0}
                            aria-valuenow={rating}
                            aria-valuemax={BASE_COUNT_RATINGS}
                            aria-invalid={error ? true : false}
                        >
                            <StarIcon
                                className={cls(styles.start, i < currentRating && styles.filled)}
                            />
                        </li>
                    );
                })}
            </ul>
            {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

export default Rating;