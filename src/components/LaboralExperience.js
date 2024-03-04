import React from 'react';
import Work from './Work';
import '../styles/stylesLaboralExp.css';

function LaboralExperience(){
    return(
        <div className='labExp'>
            <h2 className='subTLE'>EXPERIENCIA LABORAL</h2>
            <Work startYear = "2020" endYear = "2024" company="UNMSM -FCE" position="Helpdesk" skills={["Resolución de problemas", "Orientación a resultados", "Trabajo en Equipo", "Pensamiento Analítico", "Ms Office", "Team Viewer", "Anydesk", "Ultraviewer", "Redes y Conectividad"]} functions="Soporte Técnico de TI (Instalación de Software, Formateo y reparación de PC's), remoto y presencial dirigido a los usuarios administrativos y docentes pertenecientes a la Facultad de Ciencias Económicas."/>
            <Work startYear = "2023" endYear = "2023" company="DIGITAL HOUSE" position="Web Developer Full Stack" skills={["Resolución de problemas", "Orientación a resultados", "Trabajo en Equipo", "Pensamiento Analítico", "Resiliencia", "JavaScript", "HTML5", "CSS3", "NodeJS", "Express", "React"]} functions="Desarrollo de una apicación web en el marco del proyecto 'Trend Boutique'"/>
            <Work startYear = "2014" endYear = "2024" company="Servicio Técnico Gadiel" position="Administrador" skills={["Resolución de problemas", "Comunicación Oral", "Pensamiento Analítico", "Atención al usuario"]} functions="Soporte técnico, atención al usuario, ventas de productos de tecnología"/>
            <Work startYear = "2014" endYear = "2014" company="I&DEAS CONSULTING" position="Helpdesk" skills={["Resolución de problemas", "Comunicación Oral", "Trabajo en Equipo", "Pensamiento Analítico", "Liderazgo"]} functions="Responsable de la instalación de Cableado Estructurado para centro de cómputo de la IEP SANTIAGOP ANTÚNEZ DE MAYOLO - VES"/>
            <Work startYear = "2013" endYear = "2013" company="CONGRESO DE LA REPÚBLICA DEL PERÚ" position="Helpdesk" skills={["Resolución de problemas", "Comunicación Oral", "Trabajo en Equipo", "Pensamiento Analítico", "Liderazgo"]} functions="Trabajo por proyecto. Responsable de soporte y migración de data en 750 Equipos de los usuarios de las oficinas de la sede central del Programa JUNTOS"/>
            <Work startYear = "2013" endYear = "2013" company="PROGRAMA JUNTOS" position="Helpdesk" skills={["Resolución de problemas", "Comunicación Oral", "Trabajo en Equipo", "Pensamiento Analítico"]} functions="Trabajo por proyecto. Responsable de soporte y migración de data de los usuarios de las oficinas de la sede central del Programa JUNTOS"/>
            <Work startYear = "2013" endYear = "2013" company="PROGRAMA JUNTOS" position="Helpdesk" skills={["Resolución de problemas", "Comunicación Oral", "Trabajo en Equipo", "Pensamiento Analítico"]} functions="Trabajo por proyecto. Responsable de de Implementación de Cableado Estructurado y conexionamiento en la sede central del Programa JUNTOS"/>
            <Work startYear = "2010" endYear = "2012" company="UGEL-01" position="Helpdesk" skills={["Resolución de problemas", "Orientación a resultados", "Trabajo en Equipo", "Pensamiento Analítico", "Resiliencia"]} functions="Soporte técnico en atención a los usuarios administrativos de las distintas oficinas"/>
                        
        </div>
    );
}

export default LaboralExperience;