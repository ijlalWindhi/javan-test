import { IProduct } from '../types/Product.type';

const sellers = ['Nike', 'Adidas', 'Uniqlo', 'Zara', 'H&M'];
const colors = ['Red', 'Blue', 'Green', 'Black', 'White'];
const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

/**
 * Enhance product data with random seller, color, and size
 * @param product 
 * @returns
 * @example enhanceProductData({ id: 1, title: 'T-Shirt', price: 100, category: 'Shirt', description: 'A plain T-Shirt', image: 'tshirt.jpg' });
 * // Output: { id: 1, title: 'T-Shirt', price: 100, category: 'Shirt', description: 'A plain T-Shirt', image: 'tshirt.jpg', seller: 'Nike', color: 'Red', size: 'M' }
 */
export function enhanceProductData(product: IProduct): IProduct {
    return {
        ...product,
        seller: sellers[Math.floor(Math.random() * sellers.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        size: sizes[Math.floor(Math.random() * sizes.length)]
    };
}