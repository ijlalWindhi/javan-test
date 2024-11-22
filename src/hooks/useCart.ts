import Swal from 'sweetalert2';
import { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {
    removeFromCart,
    updateQuantity,
    updateNote,
    applyVoucher,
    clearCart,
} from '../store/cartSlice';

export const useCart = () => {
    const dispatch = useDispatch();
    const { items, totalAmount, discount, shipping, voucher } = useSelector(
        (state: RootState) => state.cart
    );

    const finalTotal = useMemo(() =>
        totalAmount + shipping - discount,
        [totalAmount, shipping, discount]
    );

    const handleRemoveItem = useCallback((itemId: number) => {
        dispatch(removeFromCart(itemId));
    }, [dispatch]);

    const handleUpdateQuantity = useCallback((itemId: number, quantity: number) => {
        dispatch(updateQuantity({ id: itemId, quantity }));
    }, [dispatch]);

    const handleUpdateNote = useCallback((itemId: number, note: string) => {
        dispatch(updateNote({ id: itemId, note }));
    }, [dispatch]);

    const handleApplyVoucher = useCallback((code: string) => {
        dispatch(applyVoucher(code));
    }, [dispatch]);

    const handleCheckout = useCallback(async () => {
        try {
            // Clear the cart
            dispatch(clearCart());

            // Show success message
            Swal.fire({
                title: 'Thank you for your purchase!',
                text: 'Your order has been placed successfully.',
                icon: 'success',
                confirmButtonText: 'OK',
            });
        } catch (error) {
            console.error('Checkout failed:', error);
            Swal.fire({
                title: 'Oops!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    }, [dispatch]);

    return {
        items,
        totalAmount,
        discount,
        shipping,
        voucher,
        finalTotal,
        handleRemoveItem,
        handleUpdateQuantity,
        handleUpdateNote,
        handleApplyVoucher,
        handleCheckout
    };
};