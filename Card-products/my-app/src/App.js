import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./Components/ProductPage/ProductPage";
import ProductDetailsPage from "./Components/ProductDetailsPage/ProductDetailsPage";
import Cart from ".//Components/CartPage/CartPage";
import Order from ".//Components/OrdersPage/OrdersPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
