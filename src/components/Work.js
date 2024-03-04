import React from 'react';
import PropTypes from 'prop-types';
import '../styles/stylesWork.css'

function Work(props){
    return(
        <div className='work'>
            <h3 className='ages'>{props.startYear}-{props.endYear}</h3>
            <h3 className='company'>{props.company}</h3>
            <h4 className='position'>{props.position}</h4>
            <ul>
                <h3 className='titleSkills'>Skills</h3>
                {props.skills.map((skill , i) => <li key ={skill + i}>{skill}</li>)}
            </ul>
            <p className='functions'>{props.functions}</p>
    
            
        </div>
    )
};

Work.propTypes = {
    startYear: PropTypes.string,
    endYear: PropTypes.string,
    company: PropTypes.string,
    position:PropTypes.string,
    skills:PropTypes.array,
    functions:PropTypes.string
};

export default Work;