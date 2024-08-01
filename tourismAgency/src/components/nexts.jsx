import NextCard from "./nextCard";
import React from "react";

const Nexts = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id='nexts' className="text-gray-600 body-font bg-slate-100">
      <div className="container mx-auto px-4 py-12 lg:py-24">

      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center bg-gradient-to-r from-red-600 via-red-400 to-red-600 text-white mb-2">
          Ofertas imperdibles
        </h1>
        <div className="flex flex-wrap justify-center">
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <NextCard
              month="Julio"
              day="13"
              backgroundImage="https://aldiaenmiami.com/wp-content/uploads/2021/02/Miami-playas-1536x1024.jpg"
              category="Verano 2025"
              title="Miami beach"
              price="790"
              newPrice="590"
            />
          </div>
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <NextCard
              month="Enero"
              day="8"
              backgroundImage="https://vamosanuevayork.com/wp-content/uploads/2023/05/Vista-aerea-de-Nueva-York-en-invierno.jpg"
              category="Invierno 2025"
              title="Nueva York"
              price="1000"
              newPrice="740"
            />
          </div>
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <NextCard
              month="Julio"
              day="4"
              backgroundImage="https://elviajerofeliz.com/wp-content/uploads/2019/10/Ciudades-de-Cuba.jpg"
              category="Verano 2026"
              title="La Habana"
              price="560"
              newPrice="350"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

Nexts.displayName = "Nexts";
export default Nexts;
