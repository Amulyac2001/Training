import React from 'react'

function Card({img,title,btndata}) {
    return (
        <div className="bg-gradient-to-br from-purple-900 via-purple-950 to-black w-[246px] h-[330px] rounded-2xl p-6 text-center shadow-lg flex-none transition-all duration-300 hover:bg-[#3B2A67] ">
          <img src={img} className="w-[171px] h-[141px] mx-auto" />
          <p className="text-lg font-semibold mt-2 p-2">{title}</p>
          <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-lg w-[200px] h-[54px]">
          {btndata}
          </button>
        </div>
      );
}

export default Card
