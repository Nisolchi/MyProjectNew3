import { useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import supabase from "./Supabase/config";
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import WorkoutPage from './pages/WorkoutPage';
import Navbar from './Component/Navbar';

function App() {
  const [count, setCount] = useState(0)
 const [workouts, setWorkouts] = useState([]); /* New state variable for the workouts */

 const getWorkouts = async()=>{
  const{data, error}= await supabase.from("workouts").select();
  if(error){
    console.log("there was an error", error);
    return;
  }else{
    console.log("Data fetched successfully", data);
    setWorkouts(data);
  }
 }; /* Create a function to get all the workouts from supabase */
useEffect(()=>{
  getWorkouts();
},[]);
  return (
    <>
     
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/AboutMePage' element={<AboutMePage/>}/>
          <Route path='/FormPage' element={<FormPage/>}/>
          <Route path='/WorkoutPage'  element={<WorkoutPage workouts={workouts}/>}/>
          <Route path='/WorkoutPage/:id'  element={<WorkoutPage workouts={workouts}/>}/>
          
          {/* Add a new route for workouts page */}
        </Routes>
        
      
      
      <h2></h2>
      
      </div>
      
    </>
  )
}

export default App;
