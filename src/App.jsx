import { useEffect, useState } from 'react';
import {Routes, Route, Link} from "react-router-dom"
import './App.css';
import supabase from "./Supabase/config";
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}
        </Routes>
        
      
      
      \<h2></h2>
      
      </div>
      
    </>
  )
}

export default App;
