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
export interface ProductRatingProps {
    productRating: number;
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    discountPercentage:number;
    thumbnail: string;
  }

export interface Cart{
    cartItems:CartItem[],
    quantity:number
}
export interface CartItemProps {
    id: number;
    quantity:number;
    thumbnail: string;
    name:string;
}