import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
const getBreedsName = (data) => {
  let newData = [];
  for (let key in data) {
    newData.push(key);
  }

  return newData;
};
const Home = () => {
  const [breedsData, setBreedsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        let arr = getBreedsName(res.data.message);
        if (arr) {
          setBreedsData(arr);
          //   console.log(arr);
        }
      })
      .catch((err) => {
        console.log("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1>List of all puppies</h1>
      <div className={styles.container}>
        {breedsData &&
          breedsData.length !== 0 &&
          breedsData.map((el, i) => (
            <div key={i} className={styles.breedDiv}>
              <Link to={`/puppy/${el}`}>
                <h2>{el}</h2>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
