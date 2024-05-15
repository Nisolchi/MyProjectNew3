import { Link } from "react-router-dom";
import supabase from "../Supabase/config";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function WorkoutPage({workouts}) {
    const[ workoutCard, setWorout]= useState(null)
    const {workoutId}= useParams();
    const[isSupabase, setIsSupabase]= useState(false)

    const deleteWorkout =async()=>{
        const {error} = await (supabase)
        .from("workouts")
        .delete()
        .eq("id", workoutCard.id)
        if(error){
            console.log("na'guara",error)
        } else {
            setWorout()
        }
    }

    /* const {workoutId}= useParams();

   /*  =>{
        const filteredWorkout= workouts.filter(workout=> workout.id !== workoutId);
        console.log(workoutId);
        return setWorkouts(filteredWorkout)

    };  */
   /* const deleteWorkout= async()=>{
        
            const {error}= await (supabase)
            .from('workouts')
            .delete()
            .eq('id', workouts.id)

            if(error){
                console.log(error)
            }else{setWorkouts(prevWorkouts=> prevWorkouts.filter(workout=> workout.id !== id))}
            
        };
        
    

    } */
    return(
     <div className="bigCard">

     <h1>Our Workouts</h1>

     {workouts.map((workout)=> {
        return(
            <div key={workout.id}className="card">

                <h1>{workout.Body_Part}</h1>
                <img src={workout.image} alt={workout.name}/>
                <h2>{workout.name}</h2>
                <p>Instruction:{workout.instruction}</p>

              <button className="btnDelete" onClick={() => deleteWorkout(workout.id)}>Delete</button>


            </div>
        );
     })}
     </div>
    );

}
export default WorkoutPage;