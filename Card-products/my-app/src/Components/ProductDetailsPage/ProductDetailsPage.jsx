import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ProductDetailsPage.css";

function ProductDetailsPage() {
  const { id } = useParams();
  const product = useSelector((store) => store.products.data);
  const [newProd, setNewProd] = useState({});

  useEffect(() => {
    if (id) {
      const prod = product.find((ele) => ele.id === Number(id));
      prod && setNewProd(prod);
    }
  }, [id, product]);

  console.log(newProd);

  const addToProductArray = JSON.parse(localStorage.getItem("product")) || [];

  const addToCart = (ele) => {
    const newObj = { ...ele, qty: 1 };
    addToProductArray.push(newObj);
    localStorage.setItem("product", JSON.stringify(addToProductArray));
  };

  return (
    <div className="newProd">
      <div className="prod-img">
        <img src={newProd.image} alt="" />
      </div>

      <div className="prod-details">
        <h1>{newProd.brand}</h1>
        <h2>{newProd.title}</h2>
        <h3>{newProd.category}</h3>
        <h4>${newProd.price}</h4>
        <button className="prod-btn" onClick={() => addToCart(newProd)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
