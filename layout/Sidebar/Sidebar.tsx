import cls from 'clsx';

import Menu from "../Menu/Menu";
import Logo from '../assets/logo.svg';

import SidebarProps from './Sidebar.props';
import styles from './Sidebar.module.css';

const Sidebar: React.FC<SidebarProps> = ({ className, ...props }) => {
    return (
        <aside className={cls(styles.aside, className)} {...props}>
            <Logo />
            <Menu />
        </aside>
    );
}

export default Sidebar;