// import React, { useEffect ,useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllData } from '../Redux/DashboardRedux/action';
// import { Flex, Select } from "@chakra-ui/react";
// import "./BookPage.css";

// export const BookPage = () => {

//   const [selectedGenre, setSelectedGenre] = useState("");
//   const [selectedSort, setSelectedSort] = useState("");


//   const adminData = useSelector((store) => store.DashBoardReducer.adminData);
// const dispatch=useDispatch();



//   useEffect(() => {
//     dispatch(getAllData);
//   }, []);
//   const filteredData = adminData.filter((el) =>
//   selectedGenre === "" ? true : el.genre === selectedGenre
// );

// const sortedData = selectedSort === "asc" ? filteredData.sort((a, b) => a.cost - b.cost) : selectedSort === "desc" ? filteredData.sort((a, b) => b.cost - a.cost) : filteredData;

//   return (
//     <div>
//       <Flex alignItems="center" justifyContent="center" w={"100%"} m={"1rem 0"}>
//         <Select
//           placeholder="Filter by genre"
//           width="300px"
//           mr="2rem"
//           value={selectedGenre}
//           onChange={(e) => setSelectedGenre(e.target.value)}
//         >
//           <option value="">All</option>
//           <option value="science">Science</option>
//           <option value="fiction">Fiction</option>
//           <option value="action">Action</option>
//           <option value="comedy">Comedy</option>
//           <option value="horror">Horror</option>
//           <option value="romance">Romance</option>
//         </Select>

//         <Select placeholder="Sort by price" width="300px"  value={selectedSort}
//           onChange={(e) => setSelectedSort(e.target.value)}>
//             <option value="">None</option>
//           <option value="asc">Ascending</option>
//           <option value="desc">Descending</option>
//         </Select>
//       </Flex>
    
//     <div className='container1'>
//       {
//         sortedData.map((el)=>{
//           return(
//             <div className='container'>
//               <div className='cards'>
//                 <div className='image'>
//                   <img src={el.image_url} alt={el.book_name} />
//                 </div>
//                 <div className='info'>
//                     <h1>{el.book_name}</h1>
//                     <h3>{el.author}</h3>
//                     <h5>{el.edition}</h5>
//                     <h5>{el.genre}</h5>
//                     <h5>{el.publisher}</h5>
//                     <h3>{el.cost}</h3>
//                     <button value={el.borrowed}>Borrowed</button>
//                 </div>
//               </div>
//             </div>
//           )
//         })
//       }
//     </div>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../Redux/DashboardRedux/action';
import { Flex, Select } from "@chakra-ui/react";
import "./BookPage.css";

export const BookPage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const adminData = useSelector((store) => store.DashBoardReducer.adminData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData);
  }, []);

  const filteredData = adminData.filter((el) =>
    selectedGenre === "" ? true : el.genre === selectedGenre
  );

  const sortedData = selectedSort === "asc"
    ? filteredData.sort((a, b) => a.cost - b.cost)
    : selectedSort === "desc"
      ? filteredData.sort((a, b) => b.cost - a.cost)
      : filteredData;

  const cardsPerPage = 3;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = sortedData.slice(indexOfFirstCard, indexOfLastCard);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedData.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Flex alignItems="center" justifyContent="center" w={"100%"} m={"1rem 0"}>
        <Select
          placeholder="Filter by genre"
          width="300px"
          mr="2rem"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">All</option>
          <option value="science">Science</option>
          <option value="fiction">Fiction</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
        </Select>

        <Select placeholder="Sort by price" width="300px" value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}>
          <option value="">None</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
      </Flex>

      <div className='container1'>
        {currentCards.map((el) => {
          return (
            <div className='container'>
              <div className='cards'>
                <div className='image'>
                  <img src={el.image_url} alt={el.book_name} />
                </div>
                <div className='info'>
                  <h1>{el.book_name}</h1>
                  <h3>{el.author}</h3>
                  <h5>{el.edition}</h5>
                  <h5>{el.genre}</h5>
                  <h5>{el.publisher}</h5>
                  <h3>{el.cost}</h3>
                  <button value={el.borrowed}>Borrowed</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <ul className="pagination">
        {pageNumbers.map((number) => (
           <li key={number} className="page-item">
           <button className="page-link" onClick={() => setCurrentPage(number)}>
             {number}
           </button>
         </li>
       ))}
       </ul>
     </div>
   );
 };