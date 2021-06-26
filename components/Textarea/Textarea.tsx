import { forwardRef } from 'react';
import cls from 'clsx';

import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, ...props }, ref) => {
    return <div className={cls(styles.wrapper, className)}>
        <textarea ref={ref} className={cls(styles.textarea, error && styles.error)} {...props} />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>;
});

export default Textarea;