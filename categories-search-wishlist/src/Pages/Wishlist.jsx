import React, { useState, useEffect } from "react";
import styles from './Wishlist.module.css';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlistItems(items);
  }, []);

  
  const handleRemoveItem = (id) => {
    const updatedItems = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedItems);
    localStorage.setItem("wishlist", JSON.stringify(updatedItems));
  };

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <div className={styles.productgrid}>
          {wishlistItems.map((item) => (
            <div key={item.id} className={styles.productcard}>
              <img src={item.thumbnail} alt={item.title} />
              <h3>Title: {item.title}</h3>
              <p>Description: {item.description}</p>
              <p>Price: {item.price}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p>You have no items in your wishlist.</p>
      )}
    </div>
  );
};

export default Wishlist;