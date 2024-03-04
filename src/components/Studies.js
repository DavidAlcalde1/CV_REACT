import React from 'react';
import '../styles/stylesStudy.css';

function Studies(props){
    return(
        <div className='studies'>
            <h3 className='courseGrade'>{props.grade}</h3>
            <h4 className='ages'>{props.startYear}-{props.endYear} </h4>
            <h4 className='school'>{props.school}</h4>
            
        </div>


        
    );
}

export default Studies;