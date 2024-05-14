import {Link} from "react-router-dom";

const HomePage=({workouts})=>{
    return (

        <>
        <h1>Home</h1>
        <h2>BODY DESIGNERS</h2>
        <p>These exercise descriptions give you an idea of
         how to perform each movement correctly. 
        Remember, proper form is key to avoiding injuries 
        and getting the most out of your workouts.
        </p>
        
    
        <Link to="/AboutMePage"><button className="Btn" >go to About Me Page</button>
        </Link>
        <Link to="/FormPage"><button className="Btn" >go to create</button>
        </Link>
        </>
    );

};
export default HomePage;