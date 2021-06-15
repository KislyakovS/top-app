interface Charteristic {
    value: string;
    name: string;
}

interface ReviewModel {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;
}

export interface ProductModel {
    _id: string;
    categorys: string[];
    tags: string[];
    title: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    description: string;
    characteristica: Charteristic[];
    createdAt: Date;
    updatedAt: Date;
    image: string;
    initialRating: number;
    reviews: ReviewModel[];
    reviewCount: number;
    reviewAvg?: ReviewModel;
    advantages: string;
}
