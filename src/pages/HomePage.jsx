import {Link} from "react-router-dom";

const HomePage=({workouts})=>{
    return (

        <>
        <h1>BODY DESIGNERS</h1>
        <h2>Workout:</h2>
        



        <p>These exercise descriptions give you an idea of
         how to perform each movement correctly. 
        Remember, proper form is key to avoiding injuries 
        and getting the most out of your workouts.
        </p>
        
        <Link to="/AboutMePage"><button className="Btn" >About Me</button>
        </Link>
        <Link to="/FormPage"><button className="Btn" >Create</button>
        </Link>
        <Link to="/WorkoutPage"><button className="Btn" >Your Workout</button>
        </Link>
        <Link to="/UpdatePage"><button className="Btn" >Update Workout</button>
        </Link>
       
        </>
    );

};
export default HomePage;