import React from "react";

const AnswerCard = ({question, answer, svg})=>{
    return(
        
      <div className="p-4 flex">
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-celesteT text-blue-500 mb-4 flex-shrink-0">
    <img className="w-12" src={svg} alt="" />
  </div>
  <div className="flex-grow pl-6">
    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{question}</h2>
    <p className="leading-relaxed text-base">{answer}</p>
    <a className="mt-3 text-blue-500 inline-flex items-center">Learn More</a>
  </div>
</div>

     
    );
};

export default AnswerCard;