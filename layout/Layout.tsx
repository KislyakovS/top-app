import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

import { AppContextProvider, IAppContext } from '../context/app.context';

import LayoutProps from './Layout.props';
import styles from './Layout.module.css';

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <main className={styles.main} role="main">
                {children}
            </main>
            <Footer className={styles.footer} />
        </div >
    );
}

export default <T extends Record<string, unknown> & IAppContext>(Component: React.FC<T>) => {
    return (props: T): JSX.Element => {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};