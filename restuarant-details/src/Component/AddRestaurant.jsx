import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import {v4 as uuid} from "uuid"

export const AddNew = () => {

  const [name,setName] = React.useState("")
  const [cuisine,setcuisine] = React.useState([])
  const [price,setprice] = React.useState("")
  const [delivery,setdelivery] = React.useState("")
  const [payments,setpayments] = React.useState("")
  const [stars,setstars] = React.useState("")
  const navigate = useNavigate()
  const handleSubmit = () => {
       axios.post(`http://localhost:7070/data`,{
            id:  uuid(),
            name: name,
            cuisine: cuisine.split(" "),
            price: price,
            delivery: delivery,
            payments: payments,
            stars: stars
       }
       ).then(() => navigate("/")).catch((err) => {
        console.log(err)
       })
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="newRestaurantForm"
        style={{
          display: "flex",
          padding: "20px",
          margin: "30px",
          flexDirection: "column",
          border: "1px solid red",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <h1  style={{
          marginBottom: "20px",
          textAlign: "center"
        }}>Enter details</h1>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          
        </label><br/>
        <label>
          Cuisine:
          <input type="text" value={cuisine} onChange={(e) => setcuisine(e.target.value)} placeholder={"Type every cuisine following a space - Sweets Beverages"} style={{width: "340px" , height: "30px"}}/>
        </label>
        <br/>
        <label>
          Price for one: <input type="number" value={price} onChange={(e) => setprice(e.target.value)}/>
        </label><br/>
        <label>
          Delivery time: <input type="number" value={delivery} onChange={(e) => setdelivery(e.target.value)}/>
        </label><br/>
        <label>
          Payments: 
          <select value={payments} onChange={(e) => setpayments(e.target.value)} >
                <option value ="card">Card</option>
                <option value ="upi">UPI</option>
                <option value ="cash">Cash</option>
                </select>
        </label><br/>
        <label>
          Stars: <input value={stars} onChange={(e) => setstars(e.target.value)}/>
        </label><br/>
      </div>
    
      <div className="new">
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
      <div className="new">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};
