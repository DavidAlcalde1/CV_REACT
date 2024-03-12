import { FaFacebook } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";


function Links() {
    const numberWhatsApp = '+51946559747'; 
    return(
        <div className="links">
            <a href="https://www.facebook.com/DavidAlcaldeC" target="blank" rel="noopener noreferrer">
            <FaFacebook size={30} color="#3b5998"/>
            </a>
            <a href="https://github.com/DavidAlcalde1" target="blank" rel="noopener noreferrer">
            <GrGithub size={30} color="#4078c0"/>
            </a>
            <a href="https://www.linkedin.com/in/jos%C3%A9-david-alcalde-cabrera-068b5a7a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#0077B5"/>
            </a>
            <a href={`https://wa.me/${numberWhatsApp}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare size={30} color='#25D366' />        
            </a>
        </div>
    )
}

export default Links;