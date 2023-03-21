import React from "react";
import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react"
import Pagination from "./Pagination";
import LoadingIndicator from "./LoadingIndicator"
function Restaurants() {

   
  const [page,setPage]=useState(1)
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false);
    const [totalPages,setTotalPages]=useState(0);

    useEffect(() => {
     getData(page);
    }, [page]);

    async function getData(page=1){
      setLoading(true)
      try{
        let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`);
        let data=await res.json();
        setLoading(false)
        console.log(data);
        setData([...data.data])
        setTotalPages(data.totalPages)
      }
      catch(error){
        setLoading(false);
        console.log(error)
      }
    }
// const handleChange=(num)=>{
//   setPage(page+1)
// }

    if(loading) return <LoadingIndicator />;

  return (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
       {/* Restaurant Card */}
       {data.map((el)=>{
        return (
          <RestaurantCard name={el.name}
          type={el.type}
          image={el.image}
          price_starts_from={el.price_starts_from}
          rating={el.rating}
          number_of_votes={el.number_of_votes}
          key={el.id}
          />
        );
       })};


      </div>
      <div>
        {/* Pagination Component */}
        <Pagination  current={page} total={totalPages} onChange={setPage}/>
      </div>
    </div>
  );
}

export default Restaurants;
