import { TopLevalCategory } from '../interfaces/topPage.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

import CoursesIcon from './icons/courses.svg';
import ServisesIcon from './icons/servises.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevalCategory.Courses },
    { route: 'servises', name: 'Сервисы', icon: <ServisesIcon />, id: TopLevalCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevalCategory.Books },
    { route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevalCategory.Products }
];

export const getPriceRu = (price: number) => `${price.toLocaleString('ru')} ₽`;

export const devOfNum = (number: number, title: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return title[(number % 100 > 4 && number % 100 < 200) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}