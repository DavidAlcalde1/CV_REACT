import React from 'react';
import Title from './Title';
import Photo from './Photo';
import '../styles/stylesSection1.css'
import Links from './Links';

function Section1(){
    return(
        <div className='section1'>
            <Title/>
            <Photo/>
            <Links/>
        </div>
    )
}

export default Section1;