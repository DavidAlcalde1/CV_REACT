import { FaFacebook } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import '../styles/stylesLinks.css'


function Links() {
    const numberWhatsApp = '+51946559747'; 
    return(
        <div className="links">
            <a className="fb" href="https://www.facebook.com/DavidAlcaldeC" target="blank" rel="noopener noreferrer">
            <FaFacebook size={30} color="#0866FF"/>
            </a>
            <a className="git" href="https://github.com/DavidAlcalde1" target="blank" rel="noopener noreferrer">
            <GrGithub size={30} color="gray"/>
            </a>
            <a className="linke" href="https://www.linkedin.com/in/jos%C3%A9-david-alcalde-cabrera-068b5a7a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#0A66C2"/>
            </a>
            <a className="wa" href={`https://wa.me/${numberWhatsApp}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare size={30} color='#25D366' />        
            </a>
        </div>
    )
}

export default Links;