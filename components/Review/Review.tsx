import cls from 'clsx';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { Rating } from '..';
import Avatar from './icons/avatar.svg';

import { ReviewProps } from './Review.props';
import styles from './Review.module.css';

const Review: React.FC<ReviewProps> = ({ review, className, ...props }) => {
    return <div className={cls(styles.review, className)} {...props}>
        <Avatar className={styles.avatar} />
        <div className={styles.title}><span className={styles.name}>{review.name}:</span><span>{review.title}</span></div>
        <div className={styles.date}>{format(new Date(review.createdAt), 'dd MMMM yyyy', { locale: ru })}</div>
        <div>
            <Rating rating={review.rating} />
        </div>
        <div className={styles.description}>{review.description}</div>
    </div>;
};

export default Review;
