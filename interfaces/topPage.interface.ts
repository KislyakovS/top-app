enum TopLevalCategory {
    Courses,
    Services,
    Books,
    Products,
}

interface Advantage {
    _id: string;
    title: string;
    description: string;
}

interface HhData {
    _id: string;
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updatedAt: Date;
}

export interface TopPageModel {
    tags: string[];
    _id: string;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: TopLevalCategory;
    advantages: Advantage[];
    createdAt: Date;
    updatedAt: Date;
    hh: HhData;
}