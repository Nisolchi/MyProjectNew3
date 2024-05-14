import { Link } from "react-router-dom";
const WorkoutPage=({workouts})=>{
    return(
     <>
     <h1>Our Workouts</h1>
     {workouts.map((workout)=>{
        return(
            <div key={workout.id}className="card">

                <h1>{workout.Body_Part}</h1>
                <img src={workout.image} alt={workout.name}/>
                <h2>{workout.name}</h2>
                <p>Instruction:{workout.instruction}</p>

                <Link to="/"><button className="Btn" >Back Home</button></Link>
            </div>
        );
     })}
     </>
    );
};

export default WorkoutPage;