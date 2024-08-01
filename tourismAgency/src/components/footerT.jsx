import React from "react"
import logo from '../../public/plane.svg'

const FooterT = React.forwardRef((props, ref) => {
    return (
        <footer ref={ref} id='footerT' className="text-white body-font bg-gradient-to-r from-blue-600 via-blue-400 to-celesteT">
            <div className="bg-black bg-opacity-35 flex justify-center py-4">
                <label className="text-lg font-medium">Otros Destinos</label>
            </div>
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <img className='w-1/2' src={logo} alt="" />
                        <span className="ml-3 text-xl">Prime Tourism Agency</span>
                    </a>
                    <p className="mt-2 text-sm text-white">Viaja lowcost todos los meses del año</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="font-medium text-white tracking-widest text-sm mb-3">Estados Unidos</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white hover:text-gray-800">Brooklyn</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">California</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Texas</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Alaska</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Centro América</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white hover:text-gray-800">Playa del Carmen</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Panamá</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Costa Rica</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Venezuela</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Europa</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white hover:text-gray-800">París</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Italia</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Países Bajos</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Inglaterra</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Argentina</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white hover:text-gray-800">Tucumán</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Misiones</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Tierra del Fuego</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Salta</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-black bg-opacity-10">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-white text-sm text-center sm:text-left">© 2005 prime tourism Agency —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@prime_tourism</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-white">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
})

FooterT.displayName = "FooterT"
export default FooterT
