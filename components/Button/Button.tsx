import cls from 'clsx';

import ArrowIcon from './arrow.svg';

import ButtonProps from './Button.props';
import styles from './Button.module.css';

const Button: React.FC<ButtonProps> = ({ apperance = 'primary', arrow = 'none', children, className, ...props }) => {
    const buttonClasses = cls(
        styles.button,
        className,
        styles[apperance]
    );

    const arrowClasses = cls(
        styles.arrow,
    );

    return (
        <button className={buttonClasses} {...props}>
            {children}
            {arrow !== 'none' && <span className={arrowClasses}><ArrowIcon /></span>}
        </button>
    );
};

export default Button;