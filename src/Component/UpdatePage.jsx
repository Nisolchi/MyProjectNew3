import { useState } from "react";
import supabase from "../Supabase/config";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const initialWorkout={
    Body_Part:"Legs and Glutes",
    image:"",
    name:"",
    instruction:"",

};

const UpdatePage=({getWorkouts})=>{
    const [updateData, setUpdateData]= useState(initialWorkout);
    const navigate = useNavigate();

    const handleInput=(event)=>{
        const field= event.target.name;
        const value= event.target.value;

        setUpdateData({
            ...updateData,
            [field]: value,
        });

    }
    const {workoutId}= useParams(); 



    
        
    
    const handleSubmit= async(event)=>{
        event.preventDefault();
        const{data,error}=  await supabase.from("workouts").update(updateData)
        .eq("id", workoutId);
        if(error){
            console.log("Error Updating workout",error);
            return;
        }else{
            // everything went OK
            getWorkouts();
            console.log("workout Updated");
            navigate("/WorkoutPage")
            setUpdateData(initialWorkout);
        }
    };


    return(
        <>
        <div className="content">
        <form className="Form" onSubmit={handleSubmit}>
            
            <select onChange={handleInput}
            value={updateData.Body_Part}
            type="text"
            name="Body_Part">
                <option value="Legs and Glutes">Legs and Glutes</option>
                <option value="Chest and Triceps">Chest and Triceps</option>
                <option value="Back and Biceps">Back and Biceps</option>
                <option value="Shoulders and ABS">Shoulders and ABS</option>
            </select>
            <label htmlFor="image">Picture(add url)</label>
            <input
            onChange={handleInput}
            value={updateData.image}
            type="text"
            name="image"
            id="image"
            />
            <label htmlFor="name">Name</label>
            <input onChange={handleInput}
            value={updateData.name}
            type="text"
            name="name"
            id="name"
            />
            <label htmlFor="instruction">Intruction</label>
            <input onChange={handleInput}
            value={updateData.instruction}
            type="text"
            name="instruction"
            id="instruction"
            />
            <button className="btn" type="submit">Update Workout</button>
            {/* <button className="btn" onClick={()=> navigate("/WorkoutPage")}>your changes</button> */}
       
            
        </form>
     </div>

        </>
    );

};
export default UpdatePage;