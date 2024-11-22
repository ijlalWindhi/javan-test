/**
 * Calculate discount based on total amount and voucher code
 * @param total 
 * @param voucher 
 * @returns 
 * @example calculateDiscount(100, 'DISC10');
 * // Output: 10
 */
export function calculateDiscount(total: number, voucher?: string): number {
    const validVouchers = {
        'DISC10': 0.1,
        'DISC20': 0.2,
        'WELCOME': 0.15
    };

    if (voucher && validVouchers[voucher as keyof typeof validVouchers]) {
        return total * validVouchers[voucher as keyof typeof validVouchers];
    }
    return 0;
}