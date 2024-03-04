import React from 'react';
import '../styles/stylesPhoto.css';

function Photo(){
    return(
        <div className='photo'>
            <img className='imagePhoto' src= "./images/fotoDavid.jpeg" alt = "foto mía" width= "250rem" />
        </div>
    );
}

export default Photo;