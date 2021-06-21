import cls from 'clsx';

import { InputProps } from './Input.props';
import styles from './Input.module.css';

const Input: React.FC<InputProps> = ({ className, ...props }) => {
    return <input className={cls(styles.input, className)} {...props} />;
};

export default Input;