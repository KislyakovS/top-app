import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';

import { MenuItem } from '../../interfaces/menu.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { TopLevalCategory, TopPageModel } from '../../interfaces/topPage.interface';
import withLayout from '../../layout/Layout';
import { firstLevelMenu } from '../../helpers/helpers';
import TopPage from '../../page-components/TopPage/TopPage';
import { API } from '../../helpers/api';

interface AliasProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: TopLevalCategory,
    page: TopPageModel,
    products: ProductModel[]
}

const Alias: React.FC<AliasProps> = (props) => {
    return <TopPage {...props} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];

    for (const m of firstLevelMenu) {
        const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
            firstCategory: m.id
        });

        paths = paths.concat(menu.flatMap(it => it.pages.map(p => `/${m.route}/${p.alias}`)));
    }

    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<AliasProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) return { notFound: true };

    const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);

    if (!firstCategoryItem) return { notFound: true };

    try {
        const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
            firstCategory: firstCategoryItem.id
        });
        const { data: page } = await axios.get<TopPageModel>(API.topPage.byAlias(params.alias as string));
        const { data: products } = await axios.post<ProductModel[]>(API.product.find, {
            category: page.category,
            limit: 10,
        });

        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};

export default withLayout(Alias);