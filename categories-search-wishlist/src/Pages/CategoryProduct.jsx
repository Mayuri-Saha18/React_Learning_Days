
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import styles from './CategoryProduct.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CategoryProduct = () => {

  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {
      const response = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);

      setProducts(response.data.products);

      console.log(response.data)
      console.log(response.data.products)

    };
    fetchProducts();
  }, [categoryName]);

  const handleWishlistClick = (product) => {

    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (!wishlist.some((item) => item.id === product.id)) {

      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert("Item added to wishlist")

    }else{
      alert("Item already added to wishlist")
    }
    
  };

  return (
    <div>
      <h1>{`All images of ${categoryName} categories`}</h1>
      {products.length ? (
        <div className={styles.container}>
          {products.map((product) => (
            <div key={product.id}>
              <div className={styles.card}>
                <img src={product.thumbnail} className={styles.imgcard} alt={product.title} />
                <div className={styles.cardbody}>
                  <h1>Name: {product.title}</h1>
                  <h4>Description: {product.description}</h4>
                  <p>Price: {product.price}</p>
                  <Link to="#" onClick={() => handleWishlistClick(product)} className="btn btn-outline-danger"><FontAwesomeIcon icon={faHeart} /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CategoryProduct;
