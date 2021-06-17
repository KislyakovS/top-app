import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { firstLevelMenu } from '../../helpers/firstLevelMenu';
import { MenuItem } from '../../interfaces/menu.interface';
import withLayout from '../../layout/Layout';

const Type: React.FC = () => {
    return (
        <></>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(m => `/${m.route}`),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) return { notFound: true };

    const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);

    if (!firstCategoryItem) return { notFound: true };

    try {
        const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
            firstCategory: firstCategoryItem.id
        });

        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
            }
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};

export default withLayout(Type);
