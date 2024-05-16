

import InstaIcon from "../assets/image/instagram.png";
import twitterIcon from "../assets/image/twitterX.png";
import githubIcon from "../assets/image/github-icon.png"

const Footer= () =>{
    const newDate= new Date();

    return (
         <footer className="footer"> 
            <div>
                <section className="Footer-img">
            <a href="https:/instagram.com"><img src={InstaIcon} alt="" /></a>
            <a href="https:/twitter.com"><img src={twitterIcon} alt="" /></a>
            <a href="https:/github.com"><img src={githubIcon} alt="" /></a>
            </section>
                Developed by NisoL ©️ {newDate.getFullYear()}
            </div>

            </footer>

        
    )
}
export default Footer;