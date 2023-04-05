import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./Search.module.css"

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async () => {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${searchValue}`);

    console.log(response.data)
    const searchResults = response.data.products;

    console.log(response.data.products)


    if (searchResults.length === 0) {
      setNoResults(true);
    } else {
      setProducts(searchResults);
      setNoResults(false);
    }
  };

  return (
    <div>
      <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {noResults ? (
        <p>No Results Found</p>
      ) : (
        <div className={styles.container}>
          {products.map((product) => (
            <div key={product.id}>
                <div className={styles.card}>
                <img src={product.thumbnail} className={styles.imgcard} alt={product.title} />
              <h2>Title: {product.title}</h2>
              <h5>Dexcription: {product.description}</h5>
              <p>Price: {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
