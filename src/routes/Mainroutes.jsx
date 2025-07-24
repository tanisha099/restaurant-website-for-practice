import { Route,Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Recipes from "../components/Recipes";
import Create from "../components/Create";

function Mainroutes() {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/recipes" element={<Recipes/>}/>
    <Route path="/create" element={<Create/>}/>
   </Routes>
  );
}

export default Mainroutes;
