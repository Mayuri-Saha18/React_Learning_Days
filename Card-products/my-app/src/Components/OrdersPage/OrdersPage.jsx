import React from "react";

function OrdersPage() {
  const oderAdd = JSON.parse(localStorage.getItem("order-product"));
  return (
    <div>
      <div className="products-div">
        {oderAdd &&
          oderAdd.map((ele) => (
            <div className="mini-product">
              <img src={ele.image} alt="" />
              <h2>{ele.title}</h2>
              <h4>{ele.brand}</h4>
              <h4>{ele.category}</h4>
              <h4>${ele.price}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}

export default OrdersPage;
