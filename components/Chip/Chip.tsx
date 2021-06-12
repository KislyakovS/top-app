import cls from 'clsx';

import ChipProps from './Chip.props';
import styles from './Chip.module.css';

const Chip: React.FC<ChipProps> = ({ size = 'medium', color = 'ghost', className, href, children, ...props }) => {
    const chipClasses = cls(
        styles.chip,
        className,
        href && styles.link,
        styles[size],
        styles[color],
    );

    return href
        ? <a className={chipClasses} href={href}>{children}</a>
        : <div className={chipClasses}>{children}</div>;
};

export default Chip;