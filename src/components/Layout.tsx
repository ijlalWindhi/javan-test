import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import Image from "./Image";

const Layout = () => {
  const { items: cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-md z-50 py-4 px-4 sm:px-8 md:px-14 lg:px-20 flex justify-between items-center">
        <Link to="/">
          <Image
            src="/logo.svg"
            alt="Javan Store"
            className="w-14 sm:w-16 lg:w-20"
          />
        </Link>
        <div className="flex space-x-4">
          <Link to="/cart" className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              preserveAspectRatio="xMidYMid meet"
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
              fill="#fff"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[0.6rem] sm:text-xs lg:text-sm">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-20 pb-10 sm:pt-24 md:pt-28">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
