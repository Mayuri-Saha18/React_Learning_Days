import React, { useState } from "react";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const prod = JSON.parse(localStorage.getItem("product"));
  const [temp, setTemp] = useState(prod);
  console.log(temp);

  // console.log("addToProductArray", addToProductArray);
  const navigate = useNavigate();

  let total = 0;
  prod.map((ele) => {
    return (total += ele.price);
  });

  const oderAdd = JSON.parse(localStorage.getItem("order-product")) || [];
  const handleOrder = (prod) => {
    alert("Order Succefully");
    prod.map((ele) => oderAdd.push(ele));
    localStorage.setItem("order-product", JSON.stringify(oderAdd));
    navigate("/orders");
  };

  const handleQty = (val, id) => {
    console.log(id);
    setTemp(
      temp.map((item) =>
        item.id === id ? { ...item, qty: item.qty + val } : item
      )
    );
    console.log(temp);
  };

  return (
    <>
      <div className="cart">
        {temp &&
          temp.map((ele) => {
            total += Number(Math.ceil(ele.qty / 2)) * Number(ele.price);
            return (
              <div className="cart-mini">
                <img src={ele.image} alt="" />
                <div>
                  <h1>{ele.brand}</h1>
                  <h2>{ele.title}</h2>
                </div>
                <div>
                  <button onClick={() => handleQty(1, ele.id)}>+</button>
                  <p>{ele.qty}</p>
                  <button onClick={() => handleQty(-1, ele.id)}>-</button>
                </div>
                <h2>{ele.price}</h2>
              </div>
            );
          })}

        <h1>Total Price : {total}</h1>
      </div>

      <button className="cart-btn" onClick={() => handleOrder(prod)}>
        Place Order
      </button>
    </>
  );
}

export default CartPage;
