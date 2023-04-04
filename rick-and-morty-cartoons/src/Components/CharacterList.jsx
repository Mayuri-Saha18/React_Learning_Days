import React from 'react'
import CharacterCard from './CharacterCard'
import axios from "axios"
import { useEffect,useState } from 'react'
import styles from "./CharacterList.module.css"

const CharacterList = () => {
    const [characters,setCharacters]=useState([])

    const [page,setPage]=useState(1)
    const [status,setStatus]=useState("all")
    const [gender,setGender]=useState("all")
    const [searchTerm, setSearchTerm] = useState('');

    const perPage = 12;
  const rows = 4;

    useEffect(()=>{

        const fetchCharacter=async()=>{

           
            let url=`https://rickandmortyapi.com/api/character?page=${page}&name=${searchTerm}&perPage=${perPage}`;

            if(status!=="all"){

                url+=`&status=${status}`;

            }

            if(gender!=="all"){

                url+=`&gender=${gender}`;

            }

            const res=await axios.get(url)

            setCharacters(res.data.results)

        }
        fetchCharacter()

    },[page,status,gender,, searchTerm])

    const handlePreviousPage=()=>{
        if(page>1){
            setPage(page-1)
        }
    }

    const handleNextPage=()=>{
        setPage(page+1)
    }
    const handleStatusChange=(event)=>{
        setStatus(event.target.value)
        setPage(1)
    }

    const handleGenderChange=(event)=>{
        setGender(event.target.value)
        setPage(1)
    }
    function handleSearch(e) {
        setSearchTerm(e.target.value);
      }

      const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const displayCharacters = characters.slice(startIndex, endIndex);

  const totalPages = Math.ceil(characters.length / (perPage * rows));
  const currentPage = page > totalPages ? totalPages : page;
  return (
    <div>
        <div className="my-4">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Search characters..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="status-filter">
            <label>Filter by Status</label>
            <select id="status-filter" value={status} onChange={handleStatusChange}>
                <option value="all">ALL</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <label>Filter by Gender</label>
            <select id="gender-filter" value={gender} onChange={handleGenderChange}>
                <option value="all">ALL</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
    <div className={styles.characterlist}>
        {displayCharacters.map((character)=>(
            <CharacterCard key={character.id} character={character}/>
        ))}

    </div>

    <div className={styles.paginition}>

            <button onClick={handlePreviousPage}>Prev</button>
            <button onClick={handleNextPage}>Next</button>

        </div>

    </div>
  )
}

export default CharacterList