import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home, Cart } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
