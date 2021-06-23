import cls from 'clsx';

import { SeparatorProps } from './Separator.props';
import styles from './Separator.module.css';

const Separator: React.FC<SeparatorProps> = ({ className }) => <div className={cls(styles.separator, className)}></div>;

export default Separator;