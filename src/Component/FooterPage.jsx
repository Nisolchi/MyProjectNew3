

import InstaIcon from "../assets/image/instagram.png"; // remember to name your variables in camelCase
import twitterIcon from "../assets/image/twitterX.png";
import githubIcon from "../assets/image/github-icon.png"

const Footer= () =>{
    const newDate= new Date();

    return (
         <footer className="footer"> 
            <div>
            
            <a className="icon" href="https:/instagram.com"><img src={InstaIcon} alt="" /></a>
            <a className="icon" href="https:/twitter.com"><img src={twitterIcon} alt="" /></a>
            <a  className="icon" href="https:/github.com"><img src={githubIcon} alt="" /></a>
            
                Developed by NisoL ©️ {newDate.getFullYear()}
            </div>

            </footer>

        
    )
}
export default Footer;