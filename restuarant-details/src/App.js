import './App.css';
import {Link} from "react-router-dom"
import React from "react";
import axios from "axios";
import { RestaurantCard } from './Component/RestaurantDetails';

function App() {
  const [list,setData] = React.useState([]);
  const [sort, setSort] = React.useState("")
  const [sortPrice, setSortPrice] = React.useState("all")
  const [filterPayment, setfilterPayment] = React.useState("all")
 
  React.useEffect(()=>{
      
    axios.get(`http://localhost:7070/data`).then((res) =>{
      let rawList = res.data;
      var sortedList = rawList
      if(`${sortPrice}` == "lth"){
       sortedList = rawList.sort((a,b) => a.price - b.price) 
      }
      if(`${sortPrice}` == "htl"){
       sortedList = rawList.sort((a,b) => b.price - a.price) 
      }
      let filteredList = sortedList
      if(`${filterPayment}` != "all"){
        filteredList = sortedList.filter(e => e.payments == `${filterPayment}`)
       }
      
       {
        sort == "all" ? setData(filteredList) : setData(filteredList.filter(e => e.stars >= `${sort}`))
       }
        
    // console.log(list,"hello")

    })
  },[sort,sortPrice,filterPayment])


  return (
    <div className="App">
      <div id="mainBody">
        <div id="filterSection">
          <div> 
          <div>
              <label style={{fontSize: "20px", fontWeight: "bold"}}>
              Filter payment modes:
              <select onChange={(e) => setfilterPayment(e.target.value)} style={{fontSize: "15px", height: "35px", width: "150px", padding: "5px", margin: "10px"}}>
                <option value ="all">All</option>
                <option value ="card">Card</option>
                <option value ="upi">UPI</option>
                <option value ="cash">Cash</option>
                </select></label></div>
          <div>
              <label style={{fontSize: "20px", fontWeight: "bold"}}>
              Sort By Price:
              <select onChange={(e) => setSortPrice(e.target.value)} style={{fontSize: "15px", height: "35px", width: "150px", padding: "5px", margin: "10px"}}>
                <option value ="all">All</option>
                <option value ="lth">Lowest ↑</option>
                <option value ="htl">Highest↑</option>
                </select></label></div>
                <div>
              <label style={{fontSize: "20px", fontWeight: "bold"}}>
              Sort By Ratings:
              <select onChange={(e) => setSort(e.target.value)} style={{fontSize: "15px", height: "35px", width: "150px", padding: "5px", margin: "10px"}}>
                <option value ="all">All</option>
                <option value ="4">4 stars ↑</option>
                <option value ="3">3 stars ↑</option>
                <option value ="2">2 stars ↑</option>
                <option value ="1">1 stars ↑</option>
                </select></label></div>
          </div>
          </div>
           <div id="restaurantSection">
            <div id="restaurantSectionTitle">
              <div> <h1>Saved Restaurant List</h1></div>
             
                </div>
                <div id="restaurantSectionBody">
                {
               list.map((e)=>{
                return (<RestaurantCard key={e.name} {...e}/>)
               })
               }
            </div>

        </div>
      </div>
    </div>
  );
}

export default App;
