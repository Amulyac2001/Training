import React from "react";

function Pagination({totalPages,postPerPage,setCurrentPage}){
    let pages=[];
    for(let i=1;i<=Math.ceil(totalPages/postPerPage);i++){
        pages.push(i);
    }
    return(
        <div>
            {pages.map((page,index)=>{return <button key={index} onClick={()=>setCurrentPage(page)}>{page}</button> })}
        </div>
    )
}

export default Pagination;