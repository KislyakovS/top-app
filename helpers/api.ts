export const API = {
    topPage: {
        find: `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
        byAlias: (alias: string) => `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${alias}`
    },
    product: {
        find: `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`,
    },
    review: {
        createDemo: `${process.env.NEXT_PUBLIC_DOMAIN}/api/review/create-demo`,
    }
};
