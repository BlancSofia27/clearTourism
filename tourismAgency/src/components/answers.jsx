import React from "react"
import AnswerCard from "./answerCard"
import buy from '../../public/buy.svg'
import pay from '../../public/pay.svg'
import document from '../../public/document.svg'

const Answers = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id='answers' className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto lg:p-2">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center bg-gradient-to-r from-blue-600 via-blue-400 to-celesteT p-2 text-white mb-20">
          Preguntas Frecuentes
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <AnswerCard
              question="¿Qué formas de pago tengo disponibles?"
              answer="En nuestras sucursales tenemos disponibles los siguientes medios de pago:
Para destinos internacionales en pesos o dólares, Transferencias: En pesos o dólares, Tarjeta de crédito, Tarjeta de débito y pago con QR"
              svg={pay}
            />
          </div>
          <div className="p-4 md:w-1/3 flex">
            <AnswerCard
              question="¿Cuál es la documentación obligatoria para viajar?"
              answer="Los residentes argentinos pueden viajar con DNI a los países miembros del MERCOSUR y países asociados: Brasil, Paraguay, Uruguay, Bolivia, Chile, Colombia, Ecuador, Perú y Venezuela.
El DNI tiene que estar vigente, en buen estado, legible y con foto reconocible."
              svg={document}
            />
          </div>
          <div className="p-4 md:w-1/3 flex">
            <AnswerCard
              question="¿Cuáles son los canales de compra?"
              answer="Por teléfono:Si querés hacer una nueva compra, podés llamarnos al 745-1346. Nuestro horario de atención es de lunes a domingos y feriados de 9 a 23 h.
Sucursales:Podés visitarnos en nuestra sucursal ubicada en libertad 163, c.a.b.a."
              svg={buy}
            />
          </div>
        </div>
      </div>
    </section>
  )
})

Answers.displayName = "Answers"
export default Answers
