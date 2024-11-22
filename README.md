# E-commerce Shopping Cart

A modern, responsive, and feature-rich shopping cart implementation built with React, Redux, and TypeScript. This project showcases best practices in React development, state management, and clean code architecture.

## 🌟 Features

- **Shopping Cart Management**
  - Add/Remove items
  - Update quantities
  - Add notes to items
  - Real-time total calculation
- **Discount System**
  - Voucher code application
  - Multiple voucher support
  - Discount calculation
- **Checkout Process**
  - Order summary
  - Shipping cost calculation
  - Final amount calculation with VAT
- **Modern UI/UX**
  - Responsive design
  - Loading states
  - Error handling
  - User feedback
- **Clean Code Architecture**
  - Custom hooks
  - Component splitting
  - Type safety
  - Performance optimizations

## 🚀 Technologies

- React 18.x
- TypeScript 5.x
- Redux Toolkit
- React Router 6.x
- Tailwind CSS
- React Hooks
- Custom Hooks

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/ijlalWindhi/javan-test
cd javan-test
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## 🏗️ Project Structure

```
src/
├── components/            # Reusable components
│   ├── CartItem/
│   ├── CartItemsList/
│   ├── CartSummary/
│   ├── Image/
│   ├── Layout/
│   ├── NoItem/
│   ├── ProductCard/
│   └── VoucherSection/
├── contants/                # Constant values
│   └── vouchers.ts
├── hooks/                # Custom React hooks
│   └── useCart.ts
├── store/                # Redux store configuration
│   ├── productSlice.ts
│   ├── index.ts
│   └── cartSlice.ts
├── types/                # TypeScript type definitions
│   ├── Cart.type.ts
│   └── Product.type.ts
├── pages/                # Page components
│   ├── Home.tsx
│   ├── Cart.tsx
│   └── index.ts
└── App.tsx
```

## 🛠️ Component Architecture

### Cart Page

The main page component that orchestrates all cart functionality:

```typescript
const Cart: React.FC = () => {
  // Implementation details in pages/Cart.tsx
};
```

### Custom Hook (useCart)

Centralizes cart logic and state management:

```typescript
const useCart = () => {
  // Implementation details in hooks/useCart.ts
};
```

### Cart State Management

Redux slice for managing cart state:

```typescript
const cartSlice = createSlice({
  // Implementation details in store/cartSlice.ts
});
```

## 💻 Usage

### Basic Usage

```typescript
import { useCart } from './hooks/useCart';

const YourComponent = () => {
  const {
    items,
    totalAmount,
    handleCheckout
  } = useCart();

  return (
    // Your component implementation
  );
};
```

### Voucher Implementation

```typescript
const VoucherSection = () => {
  const { handleApplyVoucher } = useCart();

  return (
    // Voucher section implementation
  );
};
```

### Checkout Process

```typescript
const handleCheckout = async () => {
  try {
    await processCheckout();
    // Success handling
  } catch (error) {
    // Error handling
  }
};
```

## 🔄 State Management

The cart state is managed through Redux Toolkit with the following structure:

```typescript
interface CartState {
  items: CartItem[];
  totalAmount: number;
  discount: number;
  shipping: number;
  voucher: string;
}
```

## 🎨 Styling

The project uses Tailwind CSS for styling with custom configurations:

```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Your custom configurations
    },
  },
};
```

## 🔍 Code Quality

The project maintains high code quality standards through:

- ESLint configuration
- Prettier formatting
- TypeScript strict mode
- Husky pre-commit hooks
- Jest unit testing

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Authors

- **Ijlal Windhi** - _Initial work_ - [YourGithub](https://github.com/ijlalWindhi)

## 💡 Best Practices

This project follows several React and TypeScript best practices:

- Functional Components
- Custom Hooks
- TypeScript Interfaces
- Proper Error Handling
- Performance Optimization
- Clean Code Principles
- SOLID Principles
- DRY (Don't Repeat Yourself)
- Component Composition

---

Made with ❤️ by [Ijlal Dhisa](https://github.com/ijlalWindhi)
