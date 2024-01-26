import React, { useState } from 'react';

export default function AccordionCheckout({titulo, contenido }){
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 p-2 rounded-md bg-slate-200 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-base font-medium">{titulo}</h2>
        <span className="transform transition-transform">
          {isOpen ? '▼' : '►'}
        </span>
      </div>

      {isOpen && (
        <div className="mt-4">
           <>{contenido}</>
        </div>
      )}
    </div>
  );
};

