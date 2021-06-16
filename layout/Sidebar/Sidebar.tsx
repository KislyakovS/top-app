import Menu from "../Menu/Menu";

import SidebarProps from './Sidebar.props';

const Sidebar: React.FC<SidebarProps> = (props) => {
    return (
        <aside {...props}>
            Sidebar
            <Menu />
        </aside>
    );
}

export default Sidebar;