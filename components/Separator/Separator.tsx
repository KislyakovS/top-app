import cls from 'clsx';

import { SeparatorProps } from './Separator.props';
import styles from './Separator.module.css';

const Separator: React.FC<SeparatorProps> = ({ className, ...props }) => <div className={cls(styles.separator, className)} {...props}></div>;

export default Separator;