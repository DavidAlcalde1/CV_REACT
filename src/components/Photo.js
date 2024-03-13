import React from 'react';
import {motion} from 'framer-motion'
import '../styles/stylesPhoto.css';

function Photo(){
    const [isHovered] = React.useState(false);
    
    return(
        <div className='photo'>
            <motion.img className='imagePhoto'
            animate={{ filter : isHovered ? "brightness(1.2)" : "brightness(1)" } }
            whileHover={{ filter: "brightness(1.2)" }} 
            // animate={{scale : isHovered ? 1.2 : 1}}
            // whileHover={{ scale : 1.2}}  
            src= "./images/fotoDavid.jpeg" alt = "foto mía" width= "250rem" />
        </div>
    );
}

export default Photo;