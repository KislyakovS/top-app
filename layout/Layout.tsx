import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

import LayoutProps from './Layout.props';

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                <Sidebar />
                <div>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default <T extends Record<string, unknown>>(Component: React.FC<T>) => {
    return (props: T): JSX.Element => {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};