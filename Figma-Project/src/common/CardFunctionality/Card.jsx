import React from 'react'

function Card({img,title,btndata}) {
    return (
        <div className="bg-[#2F264E] p-4 rounded-2xl shadow-md w-48 text-center text-white">
          <img src={img} className="w-12 h-12 mx-auto" />
          <p className="text-lg font-semibold mt-2">{title}</p>
          {/* <p className="text-sm text-gray-400"></p> */}
          <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full">
          {btndata}
          </button>
        </div>
      );
}

export default Card
