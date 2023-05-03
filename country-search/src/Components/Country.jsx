import React from 'react'
import { useState } from "react";
import {Fetch} from "./Fetch";
import styled from "styled-components";
const URL = "http://localhost:3000/countries";

const Country = () => {

    const [text, setText]=useState("");
    const { data,err,loading }=Fetch(URL,{q: text,
  });


  console.log(text);


  const handleChange =(e)=>{

    setText(e.target.value);

  };
  console.log(data);


  return (

    <div>

    <input type="text" placeholder="search country" onChange={handleChange}/>

      <Debounce>

        {loading?(

          <div>


            <h1>Loading...</h1>
          </div>

        ) : err ? (

          <div>Something went wrong</div>

        ) : (
          data.map((el)=>{

            return (

              <div>

                <Header>{el.country}</Header>

              </div>
            );
          })
        )}

      </Debounce>

    </div>
  )
}

export default Country

const Debounce=styled.div`

  height: 200px;
  width: 400px;
  overflow: auto;
  margin: auto;
  border:1px solid black;

`;

const Header=styled.h3`

  &:hover{

    background-color: rgb(207, 200, 200);


  }

`;
