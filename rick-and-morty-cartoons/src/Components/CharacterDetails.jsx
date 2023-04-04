import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from "./CharacterCard.module.css"

const CharacterDetails = () => {

    const [details, setDetails] = useState(null)

    const { character_id } = useParams();


    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${character_id}`)
            .then((res) => {
                setDetails(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [character_id])

    if (!details) {
        return <div>
            Loading...
        </div>
    }

    const { name, image, status, species, type, gender, origin, location } = details
    return (
        <div>

            <div className={styles.cards}>
                <img src={image} alt={name} width={"20%"} margin={"auto"}/>
                <div style={{margin:"auto"}}>

                    <h1>Name:{name}</h1>
                    <p>Status:{status}</p>
                    <p>Species:{species}</p>
                    <p>Type:{type}</p>
                    <p>Gender:{gender}</p>
                    <p>Origin:{origin.name}</p>
                    <p>Location:{location.name}</p>

                </div>
            </div>

        </div>
    )
}

export default CharacterDetails;
