import cls from 'clsx';

import { CardProps } from './Card.props';
import styles from './Card.module.css';
import { forwardRef } from 'react';

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, color = 'white', sizePadding = 'medium', children, ...props }, ref) => {
    const cardClasses = cls(
        styles.card,
        color === 'grey' && styles.colorGray,
        sizePadding === 'big' && styles.cardPaddingBig,
        className
    );

    return <section ref={ref} className={cardClasses} {...props}>{children}</section>;
});

export default Card;