import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Packs from '../components/packs';
import { useRef } from "react";
import Answers from '../components/answers';
import plane from '../../public/plane.svg';
import Nexts from '../components/nexts';
import FooterT from '../components/footerT';

const Tourism = () => {
    const packsRef = useRef(null);
    const answersRef = useRef(null);
    const nextsRef = useRef(null);
    const contactoRef = useRef(null);

    const scrollToPacks = () => {
        packsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToAnswers = () => {
        answersRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToNexts = () => {
        nextsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToContacto = () => {
        contactoRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const images = [
        'https://wallpapers.com/images/hd/bahamas-floating-houses-b12lxpeifd0ly8dw.jpg',
        'http://www.todoestudo.com.br/wp-content/uploads/2015/03/machu-piccchu.jpg',
        'https://cdn2.civitatis.com/brasil/rio-de-janeiro/tour-cristo-redentor-tren.jpg',
        'https://wallpaperaccess.com/full/1098837.jpg',
        'https://rotadeferias.com.br/wp-content/uploads/2020/05/01_UOR-Globe.jpg',
        'https://i1.wp.com/www.theindefinitejourney.com/wp-content/uploads/2020/04/IMG_6039.jpg?fit=6000%2C4000&ssl=1',
    ];

    return (
        <section className='overflow-x-hidden'>
            <div className="relative  w-full">
                <nav className="hidden sm:block absolute top-0 left-0 w-full p-4 z-20 ">
                    <ul className="flex space-x-8 text-white ml-2">
                        <li><a className="hover:underline cursor-pointer">Home</a></li>
                        <li><a className="hover:underline cursor-pointer" onClick={scrollToPacks}>Paquetes</a></li>
                        <li><a className="hover:underline cursor-pointer" onClick={scrollToNexts}>Promociones imperdibles</a></li>
                        <li><a className="hover:underline cursor-pointer" onClick={scrollToAnswers}>Preguntas Frecuentes</a></li>
                        <li><a className="hover:underline cursor-pointer" onClick={scrollToContacto}>Otros Destinos</a></li>
                        <li className='hidden sm:block'>
                        <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="hidden lg:flex xl:flex items-center mx-0.5 w-1/10 ml-4 mb-2 rounded bg-[#128c7e] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white focus:outline-none transition duration-1000 ease-in-out transform hover: hover:bg-white hover:text-[#128c7e]"
          >
            <svg
              className="h-4 w-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <span>dejanos tu consulta por whatsapp</span>
          </button>
                        </li>
                    </ul>
                </nav>
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
                <Slider {...settings} className="h-[430px] w-full">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img src={image} alt={`Slide ${index}`} className="w-full h-[430px] object-cover" />
                        </div>
                    ))}
                </Slider>
                <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent z-10 flex justify-end items-center pr-7 pb-5">
                    
                    <img className='w-12 mx-2 mb-4 opacity-85' src={plane} alt="" />
                    <h1 className="text-white opacity-85 ml-2 font-clear lg:text-3xl sm:text-2xl">Prime Tourism Agency</h1>
                </div>
            </div>
            
            <Packs ref={packsRef} id='packs' />
            <Answers ref={answersRef} id='answers' />
            <Nexts ref={nextsRef} id='nexts' />
            <FooterT ref={contactoRef} id='footerC' />
        </section>
    );
};

export default Tourism;









