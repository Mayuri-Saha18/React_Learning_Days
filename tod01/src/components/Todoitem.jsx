import React from "react"
import  style from "./Todo.module.css"

const Todoitem=({value})=>{
    return(
        <div className={style.box4}>
            
        <ul className={style.ultodo}>
        <li>{value}  </li>
        
        </ul>
        
        <input className={style.radio} type="checkbox"/>
          
        </div>
    )
}
export default Todoitem