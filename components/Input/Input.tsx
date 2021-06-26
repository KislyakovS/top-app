import { forwardRef } from 'react';
import cls from 'clsx';

import { InputProps } from './Input.props';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
    return <input ref={ref} className={cls(styles.input, className)} {...props} />;
});

export default Input;
