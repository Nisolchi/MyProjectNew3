import { useState } from 'react';
import './App.css';
import supabase from "./Supabase/config";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      
      <h1>BODY DESIGNERS</h1>
      \<h2>These exercise descriptions give you an idea of
         how to perform each movement correctly. 
        Remember, proper form is key to avoiding injuries 
        and getting the most out of your workouts.</h2>
      
      </div>
      
    </>
  )
}

export default App;
