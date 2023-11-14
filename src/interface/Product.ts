export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    category: string;
    brand: string;
    rating: number;
    stock: number;
    images: string[];
    thumbnail: string;
}