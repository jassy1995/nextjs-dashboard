export type TInvoice = {
    customer_id: number;
    amount: number;
    status: 'pending' | 'paid';
    date: string;
}
export type TProduct = {
    name: string;
    price: number;
    rating: number;
    image: string;
}
export type TReview = {
    name: string;
    rating: number;
    description: string;
    date: string;
}
