import cls from 'clsx';

import HtagProps from './Htag.props';
import styles from './Htag.module.css';

const Htag: React.FC<HtagProps> = ({ className, tag, children, ...props }) => {
    let element;

    const htagClasses = cls(styles[tag], className);

    switch (tag) {
        case 'h1':
            element = <h1 className={htagClasses} {...props}>{children}</h1>;
            break;
        case 'h2':
            element = <h2 className={htagClasses} {...props}>{children}</h2>;
            break;
        case 'h3':
            element = <h3 className={htagClasses} {...props}>{children}</h3>;
            break;
        default: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const a: never = tag;
            element = null;
        }
    }

    return element;
};

export default Htag;