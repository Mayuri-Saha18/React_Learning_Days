// import React from 'react';

// const ProductCard = () => {
//   return (
//     <div data-testid="product-card">
//       <h3 data-testid="name"></h3>
//       <h5 data-testid="price"></h5>
//       <p data-testid="quantity"></p>
//       <button data-testid="add-btn"></button>
//     </div>
//   );
// };

// export default ProductCard;


import React, { useState } from 'react';
import styles from "./ProductCard.module.css"

const ProductCard = ({id, name, price, stock, addToCart}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {

    const productIndex = addToCart.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      addToCart.push({ id, name, price, quantity });
    } else {
      addToCart[productIndex].quantity += quantity;
    }
    setQuantity(1);
  };
  
  return (
    <div className={styles.productcard} data-testid="product-card">
      <h3 data-testid="name">{name}</h3>
      <h5 data-testid="price">{price}</h5>
      <p data-testid="quantity">{`Available Quantity: ${stock}`}</p>
      {stock === 0 ? (
        <button className={styles.addbtn2} data-testid="add-btn" disabled>
          Out of Stock
        </button>
      ) : (
        <>
          <input
            type="number"
            min="1"
            max={stock}
            value={quantity}
  

            onChange={handleQuantityChange}
            className={styles.quantityInput}
            data-testid="quantity-input"
          />
          <button
            className={styles.addbtn}
            data-testid="add-btn"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </>
      )}
    </div>
  );
};

export default ProductCard;

