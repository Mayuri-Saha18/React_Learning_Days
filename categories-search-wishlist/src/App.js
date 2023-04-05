import './App.css';
import {Route,Routes} from "react-router"
import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import CategoryProduct from './Pages/CategoryProduct';
import Search from './Pages/Search';
import Wishlist from './Pages/Wishlist';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className='AppDiv'>

        <Routes>
           <Route path="/" element={<Home/>}></Route>
          <Route path="/categories/:categoryName" element={<CategoryProduct/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="/wishlist" element={<Wishlist/>}></Route>

        </Routes>
      </div>
      
    </div>
  );
}

export default App;
