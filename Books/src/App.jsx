import React from "react";
import {useState} from "react";
import Fiction from "./components/Fiction"
import NonFiction from "./components/NonFiction"
import fiction_data from "./fiction.json"
import nonFiction_data from "./nonfiction.json"


function App() {
  const [toggle,setToggle]=useState("false")
  const [item,setItem]=useState(fiction_data)
  const handleToggle=()=>{
    if(toggle==="false"){
      setToggle("true")
      setItem([...nonFiction_data])
    }
    else{
      setToggle("false")
      setItem([...fiction_data])
    }
  }
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={handleToggle}>{toggle==="false"?"Show Non-Fiction Books":"Show Fictional Books"}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {toggle==="false"?<Fiction item={item}/>:<NonFiction item={item}/>}
      </div>
    </div>
  );
}

export default App;
