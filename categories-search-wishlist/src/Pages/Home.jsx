import React, {useEffect,useState}  from 'react'
import styles from "./Home.module.css"
import {Link} from "react-router-dom"

const Home = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        
        const fetchCategories=async()=>{
            
            const res=await fetch("https://dummyjson.com/products/categories")
            const data=await res.json()
            setCategories(data)
            console.log(data)
            console.log(categories)
        }
       
        fetchCategories()

    },[])

  return (
    <div>

        <h1>List of all categories</h1>

        <div className={styles.container}>

            {categories.map((ele,i)=>(

                <div key={i} className={styles.categoryDiv}>
                    <Link to={`/categories/${ele}`}>
                    <h1>{ele}</h1>
                    </Link>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Home