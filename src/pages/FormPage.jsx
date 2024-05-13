import{useState} from "react";
import supabase from "../Supabase/config";

const initialWorkout={
    Body_Part:"",
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
        <from onSubmit={handleSubmit}>
            <label htmlFor="Body_Part"> Body Part</label>
            <input on onChange={handleInput}
            value={formData.Body_Part}
            type="text"
            name="Body_part"
            />
            <label htmlFor="image">Picture(add url)</label>
            <input
            onChange={handleInput}
            value={formData.image}
            type="text"
            name="image"
            />
            <label htmlFor="name">Name</label>
            <input onChange={handleInput}
            value={formData.name}
            type="text"
            name="name"
            />
            <label htmlFor="instruction">Intruction</label>
            <input onChange={handleInput}
            value={formData.instruction}
            type="text"
            name="instruction"
            />
            <button type="submit">create a Workout</button>
        </from>

    );

};
export default FormPage;