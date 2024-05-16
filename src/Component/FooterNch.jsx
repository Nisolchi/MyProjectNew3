
import FacebookIcon from "../assets/images/facebook.png";
import InstaIcon from "../assets/images/instagram.png";
import twitterIcon from "../assets/images/twitterX.png";
import githubIcon from "../assets/images/github-icon.png"

const Footer= () =>{
    const newDate= new Date();

    return (
        <Footer className="Footer">
            <div>
            <a href="https:/instagram.com"><img src={InstaIcon} alt="" /></a>
            <a href="https:/twitter.com"><img src={twitterIcon} alt="" /></a>
            <a href="https:/github.com"><img src={githubIcon} alt="" /></a>
            <a href="https:/facebook.com"><img src={FacebookIcon} alt="" /> </a>

                Developed by NisoL ©️ {newDate.getFullYear()}
            </div>

        </Footer>
    )
}
export default Footer;