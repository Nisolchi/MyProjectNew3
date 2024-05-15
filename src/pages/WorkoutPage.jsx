import { Link } from "react-router-dom";

function WorkoutPage({workouts, setWorkouts}) {

    /*const deleteWorkout= workoutId=>{
        const filteredWorkout= workouts.filter(workout=> workout.id !== workoutId);
        console.log(workoutId);
        return setWorkouts(filteredWorkout)

    }; */
    
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

              { /* <button className="btnDelete" onClick={() => deleteWorkout(workout.id)}>Delete</button>*/}

                <Link to="/"><button className="Btn" >Back Home</button></Link>

            </div>
        );
     })}
     </div>
    );
};

export default WorkoutPage;