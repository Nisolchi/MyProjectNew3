import {Link} from "react-router-dom"

function AboutMePage(){


    return(
        <>
        <h1>AboutMe</h1>
        <div>
        <img className="creator-image" src="src\assets\image\NisolPic.JPG" alt="MyPic"/>
            <p className="descriptionTxt">
                Hi, I'm Nisol Medina, a passionate web development student. 
                I'm currently working on this project to showcase the skills 
                I've recently acquired, particularly in React and its exciting
                elements. This space not only reflects my learning and experimentation
                 with technology but also my journey in the world of web development. 
                I hope you enjoy browsing my work as much as I enjoyed creating it!
            </p>

        </div>
        <Link to="/"><button className="BtnBackHome" >go to Home Page</button>
        </Link>
        </>
    );
};
export default AboutMePage;