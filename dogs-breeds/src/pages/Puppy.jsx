import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BreedsLayout from "../components/BreedsLayout";
import styles from "./Puppy.module.css";
const Puppy = () => {
  const { breed } = useParams();
  const [breedList, setBreedList] = useState([]);
  const [loading, setLoading] = useState(false);
  //   console.log(breed);


  useEffect(() => {
    if (breed) {
      setLoading(true);
      axios
        .get(`https://dog.ceo/api/breed/${breed}/images`)
        .then((res) => {
          setBreedList(res.data.message);
          console.log(res.data.message);
        })
        .catch((err) => {
          console.log("Something went wrong");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [breed]);
  if (loading) return <div>Loading...</div>;
  if (breed == undefined)
    return (
      <div>
        <h1>Please select any breed from homepage</h1>
      </div>
    );

  return (
    <div>
      <h1>{`All images of ${breed} puppies`}</h1>
      <div className={styles.container}>
        {breedList &&
          breedList.length !== 0 &&
          breedList.map((imageUrl, i) => (
            <BreedsLayout key={i} imageUrl={imageUrl} breed={breed} />
          ))}
      </div>
    </div>
  );
};

export default Puppy;
