import cls from 'clsx';

import { TextareaProps } from './Textarea.props';
import styles from './Input.module.css';

const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
    return <textarea className={cls(styles.textarea, className)} {...props} />;
};

export default Textarea;