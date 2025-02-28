"use client"
import { useState,useEffect } from "react";

export default function FetchData(){
    const [data,setData]=useState();
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((data) => {
            setData(data); 
            console.log(data)
          })
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

    return(
        <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Latest Posts</h1>
        <div>
          {data?.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    )
}