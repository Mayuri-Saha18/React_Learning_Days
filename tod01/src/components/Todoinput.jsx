import React from "react";
import  style from "./Todo.module.css"

const Todoinput=({ todoadd}) =>{

    
    const [todos,setTodos]= React.useState("");

    const itemevent=(event)=>{
        setTodos(event.target.value)
    }
   return ( 
   



            <div className={style.box2}>
                <h1 className={style.h1t}>Todo list</h1>
                
                
                <input value={todos} type="text" placeholder="Write Something" onChange={itemevent}/>
                <button className={style.btn}
                 disabled={!todos}
                onClick={()=>{
                   
                    todoadd(todos);
                    setTodos("");
                }}
                >Add</button>
                
                 </div>
    

   );
}

export default Todoinput