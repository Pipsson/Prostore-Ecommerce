export type Product = {
    id: string;
    name: string;
    slug: string;
    category: string;
    images: string[];
    brand: string;
    stock: number;
    description: string | null;
    price: number;
    rating: number;
    numReviews: number;
    isFeatured: boolean;
    bannerImage: string | null;
    createdAt: Date;
    updatedAt: Date;
} 