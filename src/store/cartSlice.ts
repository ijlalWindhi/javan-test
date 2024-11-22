// src/redux/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartState } from '../types/Cart.type';
import { IProduct } from '../types/Product.type';
import { calculateDiscount } from '../utils/voucher';

const initialState: ICartState = {
    items: [],
    totalAmount: 0,
    discount: 0,
    shipping: 10,
    voucher: undefined
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

            state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        updateQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
            state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        updateNote: (state, action: PayloadAction<{ id: number, note: string }>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.note = action.payload.note;
            }
        },
        applyVoucher: (state, action: PayloadAction<string>) => {
            state.voucher = action.payload;
            state.discount = calculateDiscount(state.totalAmount, action.payload);
        },
        clearCart: () => initialState
    }
});

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    updateNote,
    applyVoucher,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;