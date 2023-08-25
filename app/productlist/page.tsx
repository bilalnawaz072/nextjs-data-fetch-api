"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(data => {
        setProducts(data.products);
        console.log(data.products);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <h1>{
        products.map((product: any) => (
          <div key={product.id}>Title: {product.title} & Price: {product.price}</div>
          ))
        }</h1>
    </div>
  );
}
