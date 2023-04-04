import React from 'react'
import CharacterList from '../Components/CharacterList'
import CharacterDetails from '../Components/CharacterDetails'
import { Route,Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<CharacterList/>}></Route>
        <Route path="/character/:character_id" element={<CharacterDetails/>}></Route>
        
    </Routes>
  )
}

export default AllRoutes