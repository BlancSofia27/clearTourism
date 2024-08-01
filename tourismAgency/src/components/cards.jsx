import React from 'react';

const Card = ({ image, title, price, description, parrafo }) => {
  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
        {/* Fondo con opacidad */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85"></div>
        
        {/* Contenido del cuadro */}
        <div className="relative z-20">
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-white">{title}</h2>
          <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>{price}</span>
            <span className="text-lg ml-1 font-normal text-white">USD/por persona</span>
          </h1>
          <p className="flex items-center text-white mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{description}
          </p>
          {/* Otros elementos de texto */}
          <button className="relative flex items-center mt-auto text-white z-10 border-0 py-2 px-4 w-full focus:outline-none rounded bg-black bg-opacity-55 hover:bg-opacity-80">
  <span className="absolute inset-0 bg-black opacity-5 rounded"></span>
  <span className="relative z-10 flex items-center w-full">
    Quiero más información
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </span>
</button>

          <p className="text-xs text-white mt-3">{parrafo}</p>
        </div>
        
        {/* Imagen de fondo */}
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("${image}")`, opacity: 0.6 }}></div>
      </div>
    </div>
  );
};

export default Card;

