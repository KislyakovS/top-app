import cls from 'clsx';

import FooterProps from './Footer.props';
import styles from './Footer.module.css';

const CURRENT_YEAR = new Date().getFullYear();

const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
    return (
        <footer className={cls(styles.footer, className)}  {...props}>
            <p>
                OwlTop © 2020 - {CURRENT_YEAR} Все права защищены
            </p>
            <a href="#">
                Пользовательское соглашение
            </a>
            <a href="#">
                Политика конфиденциальности
            </a>
        </footer>
    );
};

export default Footer;