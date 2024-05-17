import{useState} from "react";
import supabase from "../Supabase/config";

const initialWorkout={
    Body_Part:"Legs and Glutes",
    image:"",
    name:"",
    instruction:"",

};
const FormPage=()=>{
    const [formData, setFormData]= useState(initialWorkout);
    const handleInput=(event)=>{
        const field = event.target.name;
        const value = event.target.value;


        setFormData({
            ...formData,
            [field]: value,
        });
    };
    const handleSubmit= async(event)=>{
        event.preventDefault();
        const{data,error}=  await supabase.from("workouts").insert([formData]);
        if(error){
            console.log("Error creating workout",error);
            return;
        }else{
            console.log("workout Created");
            setFormData(initialWorkout);
        }
    };
    
    return(
     <div className="Form-content">
        <form className="formulary" onSubmit={handleSubmit}>
            
            <select onChange={handleInput}
            value={formData.Body_Part}
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
            value={formData.image}
            type="text"
            name="image"
            id="image"
            />
            <label htmlFor="name">Name</label>
            <input onChange={handleInput}
            value={formData.name}
            type="text"
            name="name"
            id="name"
            />
            <label htmlFor="instruction">Intruction</label>
            <input onChange={handleInput}
            value={formData.instruction}
            type="text"
            name="instruction"
            id="instruction"
            />
            <button className="submit" type="submit">create Workout</button>

            
        </form>
     </div>

    );

};
export default FormPage;