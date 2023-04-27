// import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Welcome from './Components/Welcome';
import Offers from './Components/Offers';
import Teachers from './Components/Teachers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Offers/>
      <Teachers/>
      <Footer/>
    </div>
  );
}

export default App;
