import react, { useEffect } from "react";
import { useState } from "react";
import useStore from "./store";
import Pagination from "./Pagination";
import './DisplayComponent.css'

function DisplayComponent() {

    const { posts, loading, error, fetchPosts } = useStore();

    console.log(posts.length);
    const [currentPage,setCurrentPage]=useState(1);
    const [postPerPage,setpostPerPage]=useState(8);
    const last=currentPage*postPerPage;
    const first=last-postPerPage;
    const data=posts.slice(first,last);


    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <div className="Outer">
            <h1>Users</h1>
            {loading && <h2>Loading...</h2>}
            {data.map((res,index)=>(
                <div key={index} className="inner">
                    <h2>{res.title}</h2>
                    <h3>{res.body}</h3>
                </div>
            ))}
            </div>
            <div>
            <Pagination totalPages={posts.length} postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            />
            </div>
        </div>
    )
}

export default DisplayComponent