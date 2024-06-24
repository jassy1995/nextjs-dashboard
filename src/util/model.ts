export type TInvoice = {
    customer_id: number;
    amount: number;
    status: 'pending' | 'paid';
    date: string;
}
