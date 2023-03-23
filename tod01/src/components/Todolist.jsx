import React from "react"
import Todoitem from "./Todoitem"
import  style from "./Todo.module.css"

const Todolist=({todoarr}) =>{
    return (
      <div className={style.box3}>
          
              {
                  todoarr.map((el)=>(
                   <Todoitem  key={el.id} value={el.value}/>
                  ))
              }
                
          
      </div>

        
    )
}

export default Todolist