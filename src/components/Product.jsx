import { useContext, useState } from "react";
import { CartContext } from "../pages/CartContext";

const Product = (props) => {
  const { product } = props;
  const [isAdded, setIsAdded] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  const AddToCart = (e, product) => {
    let _cart = { ...cart };
    if (!_cart.items) {
      _cart = {
        items: {},
        TotalQty: 0,
        TotalPrice: 0,
      };
    }
    if (!_cart.items[product._id]) {
      _cart.items[product._id] = {
        item: product,
        qty: 1,
      };
      _cart.TotalQty += 1;
      _cart.TotalPrice += product.price;
    } else {
      _cart.items[product._id].qty += 1;
      _cart.TotalQty += 1;
      _cart.TotalPrice += product.price;
    }

    setCart(_cart);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
    // const cart = {
    //   items : {
    //     item : {},
    //     qty: 0
    //   },
    //   TotalQty: 0
    // }
  };
  return (
    <div>
      <img  src={product.image} alt="pizza" />
      <div className="text-center">
        <h3 className="text-sm font-bold py-2">{product.name}</h3>
        <span className="bg-gray-200 py-1 px-4 rounded-full text-sm">
          {product.size}
        </span>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span>{product.price} RS</span>
        <button
          onClick={(e) => {
            AddToCart(e, product);
          }}
          className={`${
            isAdded ? `bg-green-500` : `bg-yellow-500`
          } hover:bg-yellow-600 text-white py-1 px-4 rounded-full font-bold cursor-pointer`}
        >
          ADD{isAdded ? `ED` : ``}
        </button>
      </div>
    </div>
  );
};

export default Product;
