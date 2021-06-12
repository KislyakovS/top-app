import HtagProps from './Htag.props';
import styles from './Htag.module.css';

const Htag: React.FC<HtagProps> = ({ tag, children }) => {
    let element;

    switch (tag) {
        case 'h1':
            element = <h1 className={styles.h1}>{children}</h1>;
            break;
        case 'h2':
            element = <h2 className={styles.h2}>{children}</h2>;
            break;
        case 'h3':
            element = <h3 className={styles.h3}>{children}</h3>;
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