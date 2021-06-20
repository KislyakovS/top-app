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