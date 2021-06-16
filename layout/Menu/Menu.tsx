import { useContext } from 'react';

import { AppContext } from '../../context/app.context';

const Menu: React.FC = () => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    return (
        <nav>
            <ul>
                {menu.map(it => (<li key={it._id.secondCategory}>{it._id.secondCategory}</li>))}
            </ul>
        </nav>
    );
};

export default Menu;