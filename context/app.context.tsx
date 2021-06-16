import { useState, createContext, ReactNode } from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevalCategory } from '../interfaces/topPage.interface';

export interface IAppContext {
    menu: MenuItem[];
    firstCategory: TopLevalCategory;
    setMenu?: (newMenu: MenuItem[]) => void;
}

interface AppContextProps extends IAppContext {
    children: ReactNode
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevalCategory.Courses });

export const AppContextProvider: React.FC<AppContextProps> = ({ menu, firstCategory, children }) => {
    const [menuState, setMenuState] = useState<MenuItem[]>(menu);

    const setMenu = (newMenu: MenuItem[]) => {
        setMenuState(newMenu);
    };

    return (
        <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
            {children}
        </AppContext.Provider>
    )
}