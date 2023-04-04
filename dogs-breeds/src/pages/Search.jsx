import axios from "axios";
import React, { useEffect, useState } from "react";
import BreedsLayout from "../components/BreedsLayout";
import styles from "./Search.module.css";
const Search = () => {
  const [breedList, setBreedList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  const handleOnChange = (e) => {
    if (error) {
      setError(false);
    }
    const { value } = e.target;
    setQuery(value);
    // console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(query);
    getSearchResult(query.toLowerCase());
  };

  const getSearchResult = (breedname) => {
    setLoading(true);
    setError(false);
    axios
      .get(`https://dog.ceo/api/breed/${breedname}/images`)
      .then((res) => {
        setBreedList(res.data.message);
        // console.log(res);
      })
      .catch((err) => {
        setError(true);
        setBreedList([]);
        console.log("Something went wrong", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className={styles.formDiv}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <input
              className={styles.inputBox}
              type="search"
              name="name"
              placeholder="Search breed name..."
              value={query}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <button type="submit" className={styles.searchButton}>
              Search
            </button>
          </div>
        </form>
      </div>
      {error && <h1>{"Breed not found (master breed does not exist)"}</h1>}
      {breedList.length !== 0 && <h1>{`Search result for ${query}`}</h1>}
      <div className={styles.container}>
        {breedList &&
          breedList.length !== 0 &&
          breedList.map((imageUrl, i) => (
            <BreedsLayout key={i} imageUrl={imageUrl} breed={query} />
          ))}
      </div>
    </div>
  );
};

export default Search;
