import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import supabase from "./Supabase/config";
import FormPage from "./pages/FormPage";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import WorkoutPage from "./pages/WorkoutPage";
import Navbar from "./Component/Navbar";
import FooterPage from "./Component/FooterPage";
import UpdatePage from "./Component/UpdatePage";

function App() {
  const [count, setCount] = useState(0);
  const [workouts, setWorkouts] = useState(
    []
  ); 

  const getWorkouts = async () => {
    // nice work on the async/await pattern. You've implemented it as it is in the documentation
    const { data, error } = await supabase.from("workouts").select();
    if (error) {
      console.log("there was an error", error);
      return;
    } else {
      console.log("Data fetched successfully", data);
      setWorkouts(data);
    }
  }; 
  useEffect(() => {
    getWorkouts();
  }, []);
  return (
    <>
      <Navbar />
      {/* 
        The path of the Routes should be written in kebab-case (convention we use in class).
        This allows us to differentiate between the path and the component name.
        like this: <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/workout" element={<WorkoutPage getWorkouts={getWorkouts} workouts={workouts} />} />
        <Route path="/workout/:workoutId" element={<UpdatePage getWorkouts={getWorkouts} />} />
      */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutMePage" element={<AboutMePage />} />
        <Route path="/FormPage" element={<FormPage />} />
        <Route
          path="/WorkoutPage"
          element={
            <WorkoutPage getWorkouts={getWorkouts} workouts={workouts} />
          }
        />
        <Route
          path="/workout/:workoutId"
          element={<UpdatePage getWorkouts={getWorkouts} />}
        />
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
