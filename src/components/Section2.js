import React from 'react';
import LaboralExperience from './LaboralExperience';
import AppliedStudies from './AppliedStudies';
import '../styles/stylesSection2.css'

function Section2(){
    return(
        <div className='section2'>
            <LaboralExperience/>
            <AppliedStudies/>
        </div>
    )
}

export default Section2;