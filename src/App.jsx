import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Navigation from "./components/Navigation";
import CartPage from "./pages/CartPage";
import { useState, useEffect } from "react";
import { CartContext } from "./pages/CartContext";

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Routes>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/product" Component={ProductPage}></Route>
            <Route path="/cart" Component={CartPage}></Route>
          </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
};

export default App;
