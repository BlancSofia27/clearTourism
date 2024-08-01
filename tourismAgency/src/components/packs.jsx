import React from "react"
import avion from "../../public/avion.gif"
import Card from "./cards";
const Packs = React.forwardRef((props, ref)=>{
    return(
        <section ref={ref} id="packs" className="text-gray-600 body-font overflow-hidden">
  <div className="flex flex-col justify-center items-center container px-5 pt-14 mx-auto">
    <button
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  className=" hidden sm:flex md:flex items-center mx-0.5 rounded bg-[#128c7e] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white focus:outline-none transition duration-1000 ease-in-out transform hover:bg-white hover:text-[#128c7e]"
>
  <svg
    className="h-4 w-4 mr-1"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 448 512"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
  <span>Dejanos tu consulta por WhatsApp</span>
</button>
    <div className="flex flex-col text-center w-full mb-20 ">

        <div className="flex flex-row w-auto mb-4 items-center justify-center">
        <img src={avion} alt="" className="w-28" />
      <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-3xl font-medium title-font text-gray-900 ml-7 mt-5">¿A dónde planeas volar en tus próximas vacaciones?</h1>
        </div>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Explora nuestros proximos destinos</p>
      
    </div>
    </div>
    <div className="flex flex-wrap m-4">
      <Card
        image="http://fabianascaranzi.com.br/wp-content/uploads/2017/02/Fachada_xl-cancun-784x580.jpg"
        title="Paquete Cancun"
        price="$1600"
        description="7 dias y 8 noches"
        parrafo="Bahia Rivera resort"
      />
      <Card
        image="https://images.travelclass.tur.br/uploads/2018/03/universal-parks-resort-0.jpg"
        title="Paquete Universal Orlando"
        price="$2300"
        description="14 dias y 15 noches"
        parrafo="Acceso a los parques con fast past"
      />
      <Card
        image="https://lp-cms-production.imgix.net/2019-06/16641625.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
        title="Paquete Machu picchu"
        price="$1200"
        description="11 dias y 12 noches"
        parrafo="Luxury village five stars"
      />
      <Card
        image="http://www.grandbahamavacations.com/assets/New-pool-image.jpg"
        title="Paquete Islas Bahamas"
        price="$1900"
        description="14 dias y 15 noches"
        parrafo="Grand Bahama Island resort"
      />
      <Card
        image="https://live.staticflickr.com/3548/3442230489_6667c60e33_b.jpg"
        title="Paquete Miami Beach"
        price="2300"
        description="15 dias y 16 noches"
        parrafo="Miami palms suites"
      />
      <Card
        image="https://i.pinimg.com/originals/f1/da/06/f1da06d055e88d041b94be6f0ce2c3a0.jpg"
        title="Paquete Republica Dominicana"
        price="$1900"
        description="14 dias y 15 noches"
        parrafo="Grand lifeStar all inclusive"
      />
     <Card
        image="https://topview.com.br/wp-content/uploads/2020/10/passagens-aereas-bariloche-capa2019-02.jpg"
        title="Paquete Patagonia"
        price="$1200"
        description="22 dias y 23 noches"
        parrafo="Grand Bahama Island resort"
      />
      <Card
        image="https://a.cdn-hotels.com/gdcs/production182/d720/6de0e459-327d-41f3-91fb-f759cdb6098a.jpg"
        title="Paquete Florida"
        price="$1900"
        description="14 dias y 15 noches"
        parrafo="Florida Coast all inclusive"
      /> 
    </div>
    </section>
      
  );
});


Packs.displayName = 'Packs'
export default Packs