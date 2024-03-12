import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";

const Whame = () => {
  const numberWhatsApp = '+51946559747'; // Reemplaza esto con tu número de WhatsApp

  return (
    <div>
        <a 
        href={`https://wa.me/${numberWhatsApp}`} 
        target="_blank" 
        rel="noopener noreferrer"
      >
    <FaWhatsappSquare size={30} color='white' />
        
      </a>
    </div>
  );
}

export default Whame;
