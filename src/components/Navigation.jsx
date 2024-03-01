import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../pages/CartContext";

const Navigation = () => {
  const { cart } = useContext(CartContext);
  const cartStyle = {
    background: "#F59E0D",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };
  return (
    <>
      <div className="container mx-auto flex items-center justify-between py-2 px-2 sticky top-0 z-10 bg-white">
        <div className="flex items-center">
          <Link to="/">
            <img style={{ height: 80 }} src="/img/pizza2.png" alt="" />
          </Link>
          <h2 className="ml-2 hidden sm:block">Pizza</h2>
        </div>
        <ul className="flex items-center justify-between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/product">Product</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div style={cartStyle}>
                <span className="mr-2 text-white">{ cart.TotalQty ? cart.TotalQty : 0 }</span>
                <img src="/img/cart.svg" alt="cart" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
