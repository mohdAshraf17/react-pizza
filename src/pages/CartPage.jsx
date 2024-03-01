import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    if (!cart.items) {
      return;
    }
    const product = cart.items;
    setProducts(Object.values(product));
  }, [cart]);

  const increament = (ProductId) => {
    const existingQty = cart.items[ProductId].qty;
    const _cart = { ...cart };
    _cart.items[ProductId].qty = existingQty + 1;
    _cart.TotalQty += 1;
    _cart.TotalPrice += _cart.items[ProductId].item.price;
    setCart(_cart);
  };

  const decreament = (ProductId) => {
    const existingQty = cart.items[ProductId].qty;
    if (existingQty === 1) {
      return;
    }
    const _cart = { ...cart };
    _cart.items[ProductId].qty = existingQty - 1;
    _cart.TotalQty -= 1;
    _cart.TotalPrice -= _cart.items[ProductId].item.price;
    setCart(_cart);
  };

  const deleteItem = (productId) => {
    const _cart = { ...cart };
    const qty = _cart.items[productId].qty;
    const price = _cart.items[productId].item.price;
    delete _cart.items[productId];
    _cart.TotalQty -= qty;
    _cart.TotalPrice -= qty * price;
    setCart(_cart);
  };

  const handleOrderNow = () => {
    alert("Order Successfull...");
    setCart([]);
    setProducts([]);
  };

  return Products.length ? (
    <div className="container mx-auto px-2 pb-24 ">
      <h1 className="my-12 font-bold">Cart Items</h1>
      <ul>
        {Products.map((Product) => {
          return (
            <li className="mb-4" key={Product.item._id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="h-24" src={Product.item.image} alt="pizza" />
                  <span className="font-bold ml-2 w-20 text-sm md:w-48">
                    {Product.item.name}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center">
                  <button
                    onClick={() => {
                      decreament(Product.item._id);
                    }}
                    className={`${
                      Product.qty === 1 ? `bg-yellow-300` : `bg-yellow-500`
                    } px-4 py-2 rounded-full loading-none`}
                  >
                    -
                  </button>
                  <b className="px-4">{Product.qty}</b>
                  <button
                    onClick={() => {
                      increament(Product.item._id);
                    }}
                    className="bg-yellow-500 px-4 py-2 rounded-full loading-none"
                  >
                    +
                  </button>
                </div>
                <span>{Product.item.price * Product.qty} RS</span>
                <button
                  onClick={() => {
                    deleteItem(Product.item._id);
                  }}
                  className="bg-red-500 px-2 py-1 rounded-full loading-none text-sm text-white"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="my-6" />
      <div className="text-right">
        <b>Grand Total :</b> {cart.TotalPrice} RS
      </div>
      <div className="text-right mt-4">
        <button
          onClick={handleOrderNow}
          className="bg-yellow-500 px-4 py-2 rounded-full loading-none"
        >
          Order Now
        </button>
      </div>
    </div>
  ) : (
    <div>
      <h2 className="text-center mt-8">Please add items in cart</h2>
      <img
        className="mx-auto mt-12 w-2/3"
        src="/img/emptyCart.avif"
        alt="emptyCart"
      />
    </div>
  );
};

export default CartPage;
