import { useState, useEffect } from "react";
import Product from "./Product";
import Allproducts from '../pizza.json';

const Products = () => {
    const [ products, setProducts ] = useState([]);


    useEffect(() => {
        // fetch('/api/products')
        // .then(Response => {
        //     console.log(Response)
        //     Response.json()
        // }).then(products => {
        //     console.log(products);
        // })
        // fechData()
        setProducts(Allproducts)
    }, [])

  return (
    <div className="container mx-auto px-2">
      <h2 className="text-lg font-bold mt-4">Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 my-8 gap-10">
        {
          products.map(product => <Product key={product._id} product={product} />)
        }
      </div>
    </div>
  );
};

export default Products;
