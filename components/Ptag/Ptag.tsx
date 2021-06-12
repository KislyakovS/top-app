import cls from 'clsx';

import PtagProps from './Ptag.props';
import styles from './Ptag.module.css';

const Ptag: React.FC<PtagProps> = ({ size = 'medium', children, className, ...props }) => {
    const ptagClasses = cls(
        styles.text,
        className,
        styles[size],
    );

    return <p className={ptagClasses} {...props}>{children}</p>;
};

export default Ptag;