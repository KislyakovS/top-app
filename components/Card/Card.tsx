import cls from 'clsx';

import { CardProps } from './Card.props';
import styles from './Card.module.css';

const Card: React.FC<CardProps> = ({ className, color = 'white', sizePadding = 'medium', children, ...props }) => {
    const cardClasses = cls(
        styles.card,
        color === 'grey' && styles.cardGray,
        sizePadding === 'big' && styles.cardPaddingBig,
        className
    );

    return <section className={cardClasses} {...props}>{children}</section>;
};

export default Card;