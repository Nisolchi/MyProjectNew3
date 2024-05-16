import { Link } from "react-router-dom";
import supabase from "../Supabase/config";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function WorkoutPage({workouts, getWorkouts}) {
    
   
    const deleteWorkout =async(workoutId)=>{
        const {error} = await (supabase)
        .from("workouts")
        .delete()
        .eq("id", workoutId)
        if(error){
            console.log("na'guara",error)
        } else {
            console.log("Workout deleted");
            getWorkouts();
        }
    }
    

    
        

    return(
     <div className="bigCard">

     <h1>Our Workouts</h1>
    
     <h3 className="descriptionTxt">These exercise descriptions give you an idea of
         how to perform each movement correctly. 
        Remember, proper form is key to avoiding injuries 
        and getting the most out of your workouts.
        </h3>

     {workouts.map((workout)=> {
        return(
            <div key={workout.id}className="card">

                <h1>{workout.Body_Part}</h1>
                <img src={workout.image} alt={workout.name}/>
                <h2>{workout.name}</h2>
                <p>Instruction:{workout.instruction}</p>

              <button className="btnDelete" onClick={() => deleteWorkout(workout.id)}>Delete</button>
             <Link to= {`/workout/${workout.id}`}> <button className="btnUpdate" >Update</button></Link>


            </div>
        );
     })}
     </div>
    );

}
export default WorkoutPage;