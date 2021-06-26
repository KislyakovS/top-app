import { forwardRef } from 'react';
import cls from 'clsx';

import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
    return <textarea ref={ref} className={cls(styles.textarea, className)} {...props} />;
});

export default Textarea;