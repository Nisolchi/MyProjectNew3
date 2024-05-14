import { useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import supabase from "./Supabase/config";
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/AboutMePage' element={<AboutMePage/>}/>
          <Route path='/FormPage' element={<FormPage/>}/>
        </Routes>
        
      
      
      \<h2></h2>
      
      </div>
      
    </>
  )
}

export default App;
