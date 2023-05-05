// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useSearchParams } from "react-router-dom";
// // import Filter from "../Components/Filter";
// import { getApiData } from "../Redux/AppReducer/action";
// import Styles from "./DataPage.module.css";
// import DogsCard from "../Components/DogsCard";
// import { Image } from "@chakra-ui/react";
// import { Checkbox, Divider, Input, Spacer } from "@chakra-ui/react";

// const DataPage = () => {
//   let dispatch = useDispatch();
//   let dogsrecord = useSelector((s) => s.Appreducer.dogs);
//   let location = useLocation();
//   let [searchparams] = useSearchParams();

//   useEffect(() => {
//     if (location) {
//       let gender = searchparams.getAll("gender");
//       let queryparams = {
//         params: {
//           gender: gender,
//         },
//       };
//       dispatch(getApiData(queryparams));
//     }
//   }, [location , searchparams, dispatch]);

//   return (
//     <div className={Styles.main}>
//       <div className={Styles.filter}>
//         {/* <Filter /> */}
//         <h3>Search By Name</h3>
//       <div>
//         <div>
//           <Input type="text" />
//         </div>
//       </div>
//       <br />
//       <h3>Sort By Age</h3>
//       <div>
//         <div>
//           <Checkbox
//             size="lg"
//             colorScheme="orange"
//             value="asc"
           
//           />
//           &nbsp;&nbsp;
//           <label>Low to High</label>
//         </div>
//         <div>
//           <Checkbox
//             outlineColor={"black"}
//             size="lg"
//             colorScheme="orange"
//             value="desc"
           
//           />
//           &nbsp;&nbsp;
//           <label>High to Low</label>
//         </div>
//       </div>
//       <br />
//       <h3>Filter By Gender</h3>
//       <div>
//         <div>
//           <Checkbox
//             size="lg"
//             colorScheme="orange"
//             value="Male"
            
//           />
//           &nbsp;&nbsp;
//           <label>Male</label>
//         </div>
//         <div>
//           <Checkbox
//             size="lg"
//             colorScheme="orange"
//             value="Female"
           
//           />
//           &nbsp;&nbsp;
//           <label>Female</label>
//         </div>
//       </div>
//       </div>
//       <div className={Styles.grid}>
//         {dogsrecord.length == 0 ? (
//           <div style={{ width: "20%", margin: "auto", paddingTop: "150px" }}>
//             <Image src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" />
//           </div>
//         ) : (
//           dogsrecord.map((e, i) => {
//             return (
//               <DogsCard
//                 key={i}
//                 id={e.id}
//                 name={e.name}
//                 age={e.age}
//                 place={e.place}
//                 gender={e.gender}
//               />
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default DataPage;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getApiData } from "../Redux/AppReducer/action";
import Styles from "./DataPage.module.css";
import DogsCard from "../Components/DogsCard";
import { Image } from "@chakra-ui/react";
import axios from "axios";
import { Checkbox, Divider, Input, Spacer } from "@chakra-ui/react";

const DataPage = () => {
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");
  const [ageSortOrder, setAgeSortOrder] = useState("");

  useEffect(() => {
    axios.get("https://masai-fake-jsonserver.onrender.com/dogs")
      .then(response => {
        setDogs(response.data);
        setFilteredDogs(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    let filtered = dogs.filter(dog => {
      return dog.name.toLowerCase().includes(searchName.toLowerCase());
    });

    if (genderFilter !== "all") {
      filtered = filtered.filter(dog => {
        return dog.gender === genderFilter;
      });
    }

    if (ageSortOrder === "asc") {
      filtered = filtered.sort((a, b) => a.age - b.age);
    } else if (ageSortOrder === "desc") {
      filtered = filtered.sort((a, b) => b.age - a.age);
    }

    setFilteredDogs(filtered);
  }, [dogs, searchName, genderFilter, ageSortOrder]);

  const handleSearchNameChange = event => {
    const searchValue = event.target.value.toLowerCase();
  const filtered = dogs.filter(dog => {
    const dogName = dog.name.toLowerCase();
    return dogName.includes(searchValue) || dogName.startsWith(searchValue) || dogName.endsWith(searchValue);
  });
  setFilteredDogs(filtered);
  setSearchName(searchValue);
  };

  const handleGenderFilterChange = event => {
    setGenderFilter(event.target.value);
  };

  const handleAgeSortOrderChange = event => {
    setAgeSortOrder(event.target.value);
  };


  return (
    <div className={Styles.main}>
      <div className={Styles.filter}>
        
      <div>
        <label>Search By Name:</label>
        <input type="text" value={searchName} onChange={handleSearchNameChange}/>
      </div>
      <div>
        <label>Filter By Gender:</label>
        <select value={genderFilter} onChange={handleGenderFilterChange}>
          <option value="all">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label>Sort By Age:</label>
        <select value={ageSortOrder} onChange={handleAgeSortOrderChange}>
        <option value="">None</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
  </div>
  <div className={Styles.dogs}>
    
    {filteredDogs.map((dog) => (
        <DogsCard
          key={dog.id}
          id={dog.id}
          name={dog.name}
          breed={dog.breed}
          age={dog.age}
          gender={dog.gender}
          image={dog.image}
          description={dog.description}
        />
      ))}
  </div>
</div>
);
};

export default DataPage;