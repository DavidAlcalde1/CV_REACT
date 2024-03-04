import React from 'react';
import Studies from './Studies';
import '../styles/stylesAppliedSt.css';

function AppliedStudies(){
    return(
        <div className='appliedSt'>
            <h2 className='subTAS'>ESTUDIOS REALIZADOS</h2>
                
            <Studies grade = "BACHILLER EN INGENIERÍA DE SISTEMAS Y COMPUTACIÓN" startYear= "2012" endYear= "2015" school="UNIVERSIDAD PERUANA LOS ANDES"/>
            <Studies grade = "TÉCNICO EN ELECTRÓNICA" startYear= "2004" endYear= "2009" school="ISTP 'CARLOS CUETO FERNANDINI'"/>
            <Studies grade = "DIPLOMADO EN REPARACIÓN DE MICROCOMPUTADORAS" startYear= "2009" endYear= "2010" school="INSTITUTO IDAT"/>
            <Studies grade = "CERTIFICACIÓN EN INTRODUCCIÓN A PYTHON" startYear= "2021" endYear= "2021" school="PROGRAMA BIBLIOREDES DEL MINISTERIO DE LAS CULTURAS, LAS ARTES Y EL PATRIMONIO DEL GOCBIERNO DE CHILE"/>
            <Studies grade = "INGLÉS BÁSICO - INTERMEDIO" startYear= "2021" endYear= "2022" school="INSTITUTO SISE"/>
            <Studies grade = "CERTIFICACIÓN EN PROGRAMACIÓN WEB FULL STACK" startYear= "2023" endYear= "2023" school="ACADEMIA DIGITAL HOUSE"/>
            <Studies grade = "FRONT END DEVELOPER" startYear= "2023" endYear= "2024" school="CENTRO DE INFORMÁTICA DE LA UNMSM - CINFO"/>
            
        </div>
    );
    
}

export default AppliedStudies;