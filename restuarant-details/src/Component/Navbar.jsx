
import {  Link } from 'react-router-dom';
export const Navbar = () => {

    return (
        <div id="Navbar">
        <nav>
          <div>
          <img src="http://www.clker.com/cliparts/L/n/b/A/u/K/red-restaurant-hi.png" alt="logo" />
          <h1>The Restaurant List</h1>
          </div>
          <div>
            <Link to="/new">Add More Restaurants</Link>
          </div>
        </nav>
        </div>
    )
}