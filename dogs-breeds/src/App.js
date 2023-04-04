import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Puppy from "./pages/Puppy";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="AppDiv">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puppy" element={<Puppy />} />
          <Route path="/puppy/:breed" element={<Puppy />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;