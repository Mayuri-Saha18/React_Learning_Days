// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Pagination from "../../Pages/Pagination";
// import { getTask } from "../../Reducers/action";
// import "./ProductPage.css";
// import { useNavigate } from "react-router-dom";

// function ProductPage() {
//   const dispatch = useDispatch();
//   const product = useSelector((store) => store.products.data);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [myProd, setProd] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(getTask());
//   }, [dispatch]);

//   useEffect(() => {
//     setFilteredProducts(product);
//   }, [product]);

//   const handleFilter = (e) => {
//     const value = e.target.value;
//     if (value === "") {
//       setFilteredProducts(product);
//     } else {
//       const filterData = product.filter((ele) => {
//         return ele.category === value;
//       });
//       setFilteredProducts(filterData);
//     }
//   };

//   const handleSort = (e) => {
//     const value = e.target.value;
//     setProd(value)
//     dispatch(getTask(value));
//   };

//   const navToSinglePage = (id) => {
//     navigate(`/product/${id}`);
//   };

//   const sortedProducts = myProd === "asc" ? [...filteredProducts].sort((a, b) => b.price - a.price) : myProd === "desc" ? [...filteredProducts].sort((a, b) => a.price - b.price) : filteredProducts;

//   console.log("myProd", myProd);
//   return (
//     <>
//       <select name="" id="" onChange={handleFilter}>
//         <option value="">Filter By Category</option>
//         <option value="kids">Kids</option>
//         <option value="men">Men</option>
//         <option value="women">Women</option>
//         <option value="homedecor">Homedecor</option>
//       </select>

//       <select name="" id="" onChange={handleSort}>
//         <option value="">Sort By Price</option>
//         <option value="asc">High To Low</option>
//         <option value="desc">Low To High</option>
//       </select>
//       <div className="products-div">
//         {sortedProducts &&
//           sortedProducts.map((ele) => (
//             <div
//               className="mini-product"
//               onClick={() => navToSinglePage(ele.id)}
//             >
//               <img src={ele.image} alt="" />
//               <h2>{ele.title}</h2>
//               <h4>{ele.brand}</h4>
//               <h4>{ele.category}</h4>
//               <h4>${ele.price}</h4>
//             </div>
//           ))}
//       </div>

//       <Pagination
//       />
//     </>
//   );
// }

// export default ProductPage;


// with pagination working below code

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Pages/Pagination";
import { getTask } from "../../Reducers/action";
import "./ProductPage.css";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.products.data);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [myProd, setProd] = useState("");
  const [curPage, setCurPage] = useState(1);
  const [postsPerPage] = useState(5);

  const navigate = useNavigate();
  

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(product);
  }, [product]);

  const handleFilter = (e) => {
    const value = e.target.value;
    if (value === "") {
      setFilteredProducts(product);
    } else {
      const filterData = product.filter((ele) => {
        return ele.category === value;
      });
      setFilteredProducts(filterData);
    }
    setCurPage(1); // reset current page to 1 when filter is applied
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setProd(value);
    dispatch(getTask(value));
    setCurPage(1); // reset current page to 1 when sort is applied
  };

  const navToSinglePage = (id) => {
    navigate(`/product/${id}`);
  };

  // Get current posts
  const indexOfLastPost = curPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredProducts.slice(indexOfFirstPost, indexOfLastPost);

  const sortedProducts =
    myProd === "asc"
      ? [...currentPosts].sort((a, b) => b.price - a.price)
      : myProd === "desc"
      ? [...currentPosts].sort((a, b) => a.price - b.price)
      : currentPosts;

  const paginate = (pageNumber) => setCurPage(pageNumber);

  return (
    <>
      <select name="" id="" onChange={handleFilter}>
        <option value="">Filter By Category</option>
        <option value="kids">Kids</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="homedecor">Homedecor</option>
      </select>

      <select name="" id="" onChange={handleSort}>
        <option value="">Sort By Price</option>
        <option value="asc">High To Low</option>
        <option value="desc">Low To High</option>
      </select>
      <div className="products-div">
        {sortedProducts &&
          sortedProducts.map((ele) => (
            <div
              className="mini-product"
              key={ele.id}
              onClick={() => navToSinglePage(ele.id)}
            >
              <img src={ele.image} alt="" />
              <h2>{ele.title}</h2>
              <h4>{ele.brand}</h4>
              <h4>{ele.category}</h4>
              <h4>${ele.price}</h4>
            </div>
          ))}
      </div>

      <Pagination
        totalPost={filteredProducts.length}
        post={postsPerPage}
        setCurPage={paginate}
      />
    </>
  );
}

export default ProductPage;
