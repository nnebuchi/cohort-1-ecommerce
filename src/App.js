import logo from './logo.svg';
import icon from './assets/images/logo512.png'
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
   
  );
}


export function Greet() {
  return(
    <>HEllo</>
  )
}
export default App;

