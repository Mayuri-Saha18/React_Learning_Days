import React from 'react'
import styles from "./CharacterCard.module.css"
import {Link} from "react-router-dom"

const CharacterCard = ({character}) => {

    const {id,name,image,status}=character;
  return (
    <div>
        <Link to={`/character/${id}`}>
        <div className={styles.cards}>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <p>{status}</p>
        </div>
        </Link>
    </div>
  )
}

export default CharacterCard