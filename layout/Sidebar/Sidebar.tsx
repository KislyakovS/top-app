import SidebarProps from './Sidebar.props';

const Sidebar: React.FC<SidebarProps> = (props) => {
    return (
        <aside {...props}>
            Sidebar
        </aside>
    );
}

export default Sidebar;