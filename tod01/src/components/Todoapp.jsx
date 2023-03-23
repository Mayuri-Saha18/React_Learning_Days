import React from "react"
import Todoinput from "./Todoinput"
import Todolist from "./Todolist"
import  style from "./Todo.module.css"
import { v4 as uuidv4 } from 'uuid';

const Todoapp =()=>{
    

    const [todoarr,setTodoarr]= React .useState([])

    const todoadd=(todoinput)=>{
         setTodoarr([
             ...todoarr,{value:todoinput ,id:uuidv4() },
         ])
    };

    return (
      <div className={style.box}>
        <Todoinput  todoadd={todoadd}/>
        <Todolist todoarr={todoarr}/>
        </div>
    )

}

export default Todoapp