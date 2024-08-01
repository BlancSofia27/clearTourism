import React from "react";

const NextCard = ({ month, day, backgroundImage, category, title, description, price, newPrice }) => {
  return (
    <div className="relative h-full flex flex-col justify-between p-6 rounded-lg shadow-lg bg-cover bg-center text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="w-20 h-24 flex-shrink-0 flex flex-col text-center leading-none bg-black bg-opacity-45 p-3 rounded-sm">
            <span className="text-white text-xl font-thin pb-2 mb-2 border-b-2 border-gray-200">{month}</span>
            <span className="font-thin text-xl text-white title-font leading-none">{day}</span>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="tracking-widest text-xs title-font font-medium mb-1">{category}</h2>
            <h1 className="title-font text-xl font-medium">Vuela a {title}</h1>
            <p className="leading-relaxed mb-5">
              {description}
            </p>
            <a className="inline-flex items-center">
              <span className="flex-grow flex flex-col pl-3 ">
                <span>por solo</span>
                <span className="title-font font-medium line-through pb-1 text-lg">{price} usd</span>
                <span className="title-font font-extrabold  bg-red-600 p-2 rounded-sm md:text-2xl lg:text-[29px] xl:text-5xl">{newPrice} usd</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextCard;

