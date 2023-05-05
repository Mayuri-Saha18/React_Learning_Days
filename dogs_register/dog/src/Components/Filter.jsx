// import { Checkbox, Divider, Input, Spacer } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// const Filter = () => {
//   let [searchparams, setsearchparams] = useSearchParams();
//   let [gender, setgender] = useState(searchparams.getAll("gender") || []);
//   let handlefilter = (e) => {
//     let option = e.target.value;
//     let newgender = [...gender];
//     if (newgender.includes(option)) {
//       newgender.splice(newgender.indexOf(option), 1);
//     } else {
//       newgender.push(option);
//     }
//     setgender(newgender);
//   };
//   let handlesearch = (e) => {
//     let option = e.target.value;
//     let newgender = [...gender];
//     if (newgender.includes(option)) {
//       newgender.splice(newgender.indexOf(option), 1);
//     } else {
//       newgender.push(option);
//     }
//     setgender(newgender);
//   };

//   useEffect(() => {
//     let params = {};
//     gender && (params.gender = gender);
//     setsearchparams(params);
//   }, [gender, setsearchparams]);

//   return (
//     <>
//       <h3>Search By Name</h3>
//       <div>
//         <div>
//           <Input
//             type="text"
//             onChange={handlesearch}
//             defaultChecked={gender.includes("Male")}
//           />
//         </div>
//       </div>
//       <br />
//       <h3>Sort By Age</h3>
//       <div>
//         <div>
//           <Checkbox
//             size="lg"
//             colorScheme="orange"
//             value="Male"
//             onChange={handlefilter}
//             defaultChecked={gender.includes("Male")}
//           />
//           &nbsp;&nbsp;
//           <label>Low to High</label>
//         </div>
//         <div>
//           <Checkbox
//             outlineColor={"black"}
//             size="lg"
//             colorScheme="orange"
//             value="Female"
//             onChange={handlefilter}
//             defaultChecked={gender.includes("Female")}
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
//             onChange={handlefilter}
//             defaultChecked={gender.includes("Male")}
//           />
//           &nbsp;&nbsp;
//           <label>Male</label>
//         </div>
//         <div>
//           <Checkbox
//             size="lg"
//             colorScheme="orange"
//             type="checkbox"
//             value="Female"
//             onChange={handlefilter}
//             defaultChecked={gender.includes("Female")}
//           />
//           &nbsp;&nbsp;
//           <label>Female</label>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Filter;
import { Checkbox, Divider, Input, Spacer } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Filter = () => {
  let [searchparams, setsearchparams] = useSearchParams();
  let [gender, setgender] = useState(searchparams.getAll("gender") || []);
  let [searchTerm, setSearchTerm] = useState("");
  let [dogs, setDogs] = useState([]);
  let [sortBy, setSortBy] = useState("");

  let handlefilter = (e) => {
    let option = e.target.value;
    let newgender = [...gender];
    if (newgender.includes(option)) {
      newgender.splice(newgender.indexOf(option), 1);
    } else {
      newgender.push(option);
    }
    setgender(newgender);
  };

  let handlesearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    let params = {};
    gender && (params.gender = gender);
    setsearchparams(params);
  }, [gender, setsearchparams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://masai-fake-jsonserver.onrender.com/dogs?name_like=${searchTerm}&_sort=age&_order=${sortBy}`
        );
        setDogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [searchTerm, sortBy]);

  return (
    <>
      <h3>Search By Name</h3>
      <div>
        <div>
          <Input type="text" onChange={handlesearch} />
        </div>
      </div>
      <br />
      <h3>Sort By Age</h3>
      <div>
        <div>
          <Checkbox
            size="lg"
            colorScheme="orange"
            value="asc"
            onChange={(e) => setSortBy(e.target.checked ? "asc" : "desc")}
            defaultChecked={sortBy === "asc"}
          />
          &nbsp;&nbsp;
          <label>Low to High</label>
        </div>
        <div>
          <Checkbox
            outlineColor={"black"}
            size="lg"
            colorScheme="orange"
            value="desc"
            onChange={(e) => setSortBy(e.target.checked ? "desc" : "asc")}
            defaultChecked={sortBy === "desc"}
          />
          &nbsp;&nbsp;
          <label>High to Low</label>
        </div>
      </div>
      <br />
      <h3>Filter By Gender</h3>
      <div>
        <div>
          <Checkbox
            size="lg"
            colorScheme="orange"
            value="Male"
            onChange={handlefilter}
            defaultChecked={gender.includes("Male")}
          />
          &nbsp;&nbsp;
          <label>Male</label>
        </div>
        <div>
          <Checkbox
            size="lg"
            colorScheme="orange"
            value="Female"
            onChange={handlefilter}
            defaultChecked={gender.includes("Female")}
          />
          &nbsp;&nbsp;
          <label>Female</label>
        </div>
      </div>
      
</>
);
};

export default Filter;