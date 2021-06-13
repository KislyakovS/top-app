import React, { useState, KeyboardEvent } from 'react';
import cls from 'clsx';

import StarIcon from './star.svg';

import RatingProps from './Rating.props';
import styles from './Rating.module.css';

const BASE_COUNT_RATINGS = 5;

const RADING_LIST = new Array(BASE_COUNT_RATINGS).fill(1);

const Rating: React.FC<RatingProps> = ({ className, isEditable = false, rating, setRating, ...props }) => {
    const [currentRating, setCurrentRating] = useState(rating);

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

    const onKeyDownItemStar = (e: KeyboardEvent<SVGElement>, rating: number) => {
        if (e.code === 'Space' && setRating && isEditable) {
            setRating(rating);
        }
    };

    return (
        <ul className={cls(styles.rating, className)} {...props}>
            {RADING_LIST.map((_, i) => {
                return (
                    <li className={cls(styles.item, isEditable && styles.item_editable)} key={i}
                        onMouseEnter={() => onHoverItemStar(i + 1)}
                        onMouseLeave={onLeaveItemStar}
                        onClick={() => onClickItemStar(i + 1)}
                    >
                        <StarIcon
                            className={cls(styles.start, i < currentRating && styles.filled)}
                            tabIndex={isEditable ? 0 : -1}
                            onKeyDown={(e) => onKeyDownItemStar(e, i + 1)}
                        />
                    </li>
                );
            })}
        </ul>
    )
};

export default Rating;