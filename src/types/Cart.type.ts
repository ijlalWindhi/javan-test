import { IProduct } from "./Product.type";

export interface ICartItem extends IProduct {
    quantity: number;
    note?: string;
}

export interface ICartState {
    items: ICartItem[];
    totalAmount: number;
    discount: number;
    shipping: number;
    voucher?: string;
}