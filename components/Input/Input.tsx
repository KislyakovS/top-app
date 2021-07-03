import { forwardRef } from 'react';
import cls from 'clsx';

import { InputProps } from './Input.props';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, error, ...props }, ref) => {
    return <div className={cls(styles.wrapper, className)}>
        <input ref={ref} className={cls(styles.input, error && styles.error)} {...props} />
        {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
    </div>;
});

export default Input;
