import {Link} from "react-router-dom";

const HomePage=({workouts})=>{
    return (

        <>
        <h1>BODY DESIGNERS</h1>
        <h2>Workout</h2>

        <img className="home-img" src="\src\assets\image\PRINCIPALGIRL.jpg" alt="" />
        
       
        
        <Link to="/AboutMePage"><button className="Btn" >About Me</button>
        </Link>
        <Link to="/FormPage"><button className="Btn" >Create</button>
        </Link>
        <Link to="/WorkoutPage"><button className="Btn" >Your Workout</button>
        </Link>
       
        </>
    );

};
export default HomePage;